import { derived, writable, type Writable } from "svelte/store";
import translations from "./translations";

// Definisi tipe untuk objek translations
type Translations = {
  [locale: string]: {
    [key: string]: string;
  };
};

// Definisi tipe untuk variabel yang bisa digunakan dalam terjemahan
type TranslationVars = Record<string, string>;

// Pastikan `translations` sesuai dengan tipe yang kita tentukan
const translationsTyped: Translations = translations;

// Definisi store untuk locale
export const locale: Writable<string> = writable("en");
export const locales: string[] = Object.keys(translationsTyped);

// Fungsi translate dengan tipe yang lebih ketat
function translate(locale: string, key: string, vars: TranslationVars = {}): string {
  if (!key) throw new Error("no key provided to $t()");
  if (!locale) throw new Error(`no translation for key "${key}"`);

  const text = translationsTyped[locale]?.[key];

  if (!text) throw new Error(`no translation found for ${locale}.${key}`);

  return Object.keys(vars).reduce(
    (acc, k) => acc.replace(new RegExp(`{{${k}}}`, "g"), vars[k]),
    text
  );
}

// Store `t` untuk menerjemahkan berdasarkan locale yang aktif
export const t = derived(locale, ($locale) => (key: string, vars: TranslationVars = {}): string =>
  translate($locale, key, vars)
);
