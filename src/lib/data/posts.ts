import { browser } from '$app/environment';
import { format } from 'date-fns';
import { parse } from 'node-html-parser';
import readingTime from 'reading-time/lib/reading-time.js';

if (browser) {
  throw new Error(`posts can only be imported server-side`);
}

interface PostMetadata {
  title: string;
  date: string;
  preview?: string | { html?: string; text?: string };
  [key: string]: unknown;
}

interface Post {
  metadata: PostMetadata; // Jika metadata wajib ada
  default: string | { html: string } | (() => { html: string });
  date: string;
  preview: string
}

interface PostData extends PostMetadata {
  slug: string;
  isIndexFile: boolean;
  date: string;
  preview: {
    html: string | undefined;
    text: string | undefined;
  };
  readingTime: string;
  next?: PostData;
  previous?: PostData;
}

function addTimezoneOffset(date: Date): Date {
  const offsetInMilliseconds = new Date().getTimezoneOffset() * 60 * 1000;
  return new Date(date.getTime() + offsetInMilliseconds);
}

const files = import.meta.glob<Record<string, Post>>("/posts/**/*.md", { eager: true, query: "raw" });


export const posts: PostData[] = Object.entries(files)
  .map(([filepath, post]) => {

    console.log("POST DATA  :", post)
    console.log("INI CONTOH  ",parse("<h1>hello</h1>").querySelector("h1")?.structuredText)

    const html = parse("<p>hello</p>");

    // Pastikan post.metadata dan post.metadata.preview tidak undefined
    const metadata = post.metadata || {}; // Berikan objek kosong sebagai default
    const previewElement = metadata.preview
      ? parse(metadata.preview as string)  // Pastikan preview adalah string
      : html.querySelector('p');

    const previewHtml = previewElement?.toString() || ""; // Berikan string kosong sebagai default
    const previewText = previewElement?.structuredText; // Gunakan fallback

    return {
      ...metadata,
      slug: filepath.replace(/(\/index)?\.md/, '').split('/').pop() || '',
      isIndexFile: filepath.endsWith('/index.md'),
      date: metadata.date
        ? format(addTimezoneOffset(new Date(metadata.date)), 'yyyy-MM-dd')
        : undefined,
      preview: {
        html: previewHtml,
        text: previewText,
      },
      readingTime: readingTime(html.structuredText || "").text,
    };
  })
  .sort((a, b) => {
    const dateA = new Date(a.date || 0).getTime(); 
    const dateB = new Date(b.date || 0).getTime();
    return dateB - dateA;
  })
  .map((post, index, allPosts) => ({
    ...post,
    next: allPosts[index - 1],
    previous: allPosts[index + 1],
  }));