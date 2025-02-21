type stepsType = {
    name: string
    icon: string
    href?: string
    description: string
}

const steps: stepsType[] = [
    {
        name: "Github Account",
        href: "https://github.com/abrorilhuda",
        icon: "fab fa-github",
        description:
            `On Github I Often Experiment With the <strong
                    class="text-violet-400"
                    >JavaScript Ecosystem</strong
                > Sometimes I Use the Node runtime or Bun and can see for Myself on Github.`,
    },
    {
        name: "Google Scholar",
        href: "https://scholar.google.com/citations?user=lQMaZDcAAAAJ&hl=id",
        icon: "fab fa-google-scholar",
        description:
            `Have Written One Article With My <strong
                    class="text-violet-400">Friends and Lecturers,</strong
                >
                maybe in the future I can add more to my scientific work.`
            
    },
    {
        name: "Medium",
        icon: "fab fa-medium",
        description:
            `<strong class="text-violet-400">Coming soon....</strong>`
    },
];

export default steps;