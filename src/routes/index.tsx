import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TryKamran — AI Automation, Web Dev & Video Editing" },
      { name: "description", content: "Kamran builds AI products, automation workflows and websites, and edits video. Selected work, tools and contact." },
      { property: "og:title", content: "TryKamran — Portfolio" },
      { property: "og:description", content: "AI automation, AI products, web development, Python, prompt engineering and video editing." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  ["Work", "#work"],
  ["Tools", "#tools"],
  ["Products", "#products"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
] as const;

// Placeholder project data — replace with real projects.
const PROJECTS = [
  { name: "Project One", desc: "Short description of the project.", problem: "The problem it solves.", solution: "How it was solved.", tech: ["Python", "OpenAI API"], status: "Placeholder" },
  { name: "Project Two", desc: "Short description of the project.", problem: "The problem it solves.", solution: "How it was solved.", tech: ["React", "TypeScript"], status: "Placeholder" },
];

const TOOLS = [
  { name: "Antigravity", role: "Agentic IDE" },
  { name: "Claude", role: "Reasoning & code" },
  { name: "ChatGPT", role: "Ideation & drafting" },
  { name: "Gemini", role: "Research & multimodal" },
  { name: "GitHub", role: "Version control" },
];

const PRODUCTS = [
  { name: "AI Automation Workflow", kind: "Work in progress", desc: "Describe an automation you've built here." },
  { name: "SaaS Concept", kind: "Concept", desc: "Describe a product idea you're exploring." },
  { name: "Software Project", kind: "Completed", desc: "Describe a shipped piece of software." },
];

const SKILLS = [
  ["AI Automation", "Connecting AI models to everyday tasks so work runs itself."],
  ["AI Product Development", "Turning model capabilities into usable products."],
  ["Web Development", "Fast, responsive websites and web apps."],
  ["Python", "Scripts, data handling and backend logic."],
  ["Prompt Engineering", "Designing prompts that give reliable results."],
  ["Video Editing", "Clean, paced edits for content and products."],
];

function SectionLabel({ n, title, dark }: { n: string; title: string; dark?: boolean }) {
  return (
    <div className="mb-12 flex items-baseline gap-4">
      <span className="text-sm font-semibold text-gold">{n}</span>
      <h2 className={`text-5xl font-extrabold uppercase tracking-tight md:text-7xl ${dark ? "text-ink-foreground" : "text-foreground"}`}>{title}</h2>
    </div>
  );
}

function Index() {
  return (
    <div className="font-display">
      <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 py-5 md:px-10">
        <a href="#top" className="text-lg font-extrabold tracking-tight text-foreground">
          TRY<span className="text-gold">KAMRAN</span>
        </a>
        <nav className="hidden gap-6 text-sm font-medium text-foreground md:flex">
          {NAV.map(([l, h]) => (
            <a key={h} href={h} className="transition-colors hover:text-gold">{l}</a>
          ))}
        </nav>
      </header>

      <Hero />

      <section id="work" className="bg-ink px-5 py-24 text-ink-foreground md:px-10">
        <SectionLabel n="02" title="Selected Projects" dark />
        <div className="space-y-6">
          {PROJECTS.map((p, i) => (
            <article key={p.name} className="grid gap-8 rounded-2xl border border-ink-border p-6 md:grid-cols-[1.4fr_1fr] md:p-10">
              <div className={`flex aspect-[16/10] items-center justify-center rounded-xl bg-ink-foreground/5 ${i % 2 ? "md:order-2" : ""}`}>
                <span className="text-7xl font-extrabold text-gold/40">0{i + 1}</span>
              </div>
              <div className="flex flex-col justify-center">
                <span className="mb-3 w-fit rounded-full border border-gold px-3 py-1 text-xs text-gold">{p.status}</span>
                <h3 className="text-4xl font-bold">{p.name}</h3>
                <p className="mt-3 text-ink-muted">{p.desc}</p>
                <dl className="mt-6 space-y-3 text-sm">
                  <div><dt className="font-semibold text-gold">Problem</dt><dd className="text-ink-muted">{p.problem}</dd></div>
                  <div><dt className="font-semibold text-gold">Solution</dt><dd className="text-ink-muted">{p.solution}</dd></div>
                </dl>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tech.map((t) => <span key={t} className="rounded-full bg-ink-foreground/10 px-3 py-1 text-xs">{t}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="tools" className="px-5 py-24 md:px-10">
        <SectionLabel n="03" title="AI Tools & Workflow" />
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border bg-border md:grid-cols-5">
          {TOOLS.map((t) => (
            <div key={t.name} className="bg-background p-8 transition-colors hover:bg-card">
              <p className="text-2xl font-bold">{t.name}</p>
              <p className="mt-2 text-sm text-muted-foreground">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="products" className="bg-card px-5 py-24 md:px-10">
        <SectionLabel n="04" title="AI Products & Automation" />
        <div className="grid gap-6 md:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <article key={p.name} className={`rounded-2xl bg-background p-8 ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">{p.kind}</span>
              <h3 className={`mt-4 font-bold ${i === 0 ? "text-5xl" : "text-2xl"}`}>{p.name}</h3>
              <p className="mt-3 text-muted-foreground">{p.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="px-5 py-24 md:px-10">
        <SectionLabel n="05" title="About" />
        <p className="max-w-4xl text-3xl font-medium leading-snug md:text-5xl">
          I build <span className="text-gold">AI products</span> and automations, write software, engineer prompts, and edit video — turning ideas into things people can use.
        </p>
      </section>

      <section id="skills" className="border-t px-5 py-24 md:px-10">
        <SectionLabel n="06" title="Skills & Services" />
        <ul className="divide-y border-y">
          {SKILLS.map(([s, d], i) => (
            <li key={s} className="grid gap-2 py-6 md:grid-cols-[80px_1fr_1fr] md:items-baseline">
              <span className="text-sm font-semibold text-gold">0{i + 1}</span>
              <span className="text-3xl font-bold md:text-4xl">{s}</span>
              <span className="text-muted-foreground">{d}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="contact" className="bg-ink px-5 py-32 text-ink-foreground md:px-10">
        <span className="text-sm font-semibold text-gold">07</span>
        <h2 className="mt-4 text-6xl font-extrabold uppercase leading-[0.9] tracking-tight md:text-[9rem]">
          Let's build<br /><span className="text-gold">something.</span>
        </h2>
        <a href="mailto:hello@trykamran.com" className="mt-12 inline-flex rounded-full bg-gold px-8 py-4 text-lg font-semibold text-primary-foreground transition-transform hover:scale-105">
          Get in touch →
        </a>
      </section>

      <footer className="border-t border-ink-border bg-ink px-5 py-10 text-ink-muted md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <a href="#top" className="text-xl font-extrabold text-ink-foreground">TRY<span className="text-gold">KAMRAN</span></a>
          <nav className="flex flex-wrap gap-5 text-sm">
            {NAV.map(([l, h]) => <a key={h} href={h} className="hover:text-gold">{l}</a>)}
          </nav>
          <p className="text-sm">© {new Date().getFullYear()} TryKamran</p>
        </div>
      </footer>
    </div>
  );
}
