import { ArrowRight, ChevronRight, CircleCheck, Menu, MoveUpRight } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import signalImage from "@/assets/exoclust-signal.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Exoclust — Applied Intelligence, Engineered" },
      {
        name: "description",
        content: "Exoclust designs and builds intelligent systems across web engineering, AI, computer vision, voice automation, and business operations.",
      },
      { property: "og:title", content: "Exoclust — Applied Intelligence, Engineered" },
      {
        property: "og:description",
        content: "Intelligent digital systems for the decisions, workflows, and operations that move your business forward.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExoclustHome,
});

const capabilities = [
  {
    number: "01 / Build",
    title: "Web Product Engineering",
    copy: "Fast, accessible websites and web products that make your offer easier to understand, use, and scale.",
  },
  {
    number: "02 / Reason",
    title: "Applied AI Systems",
    copy: "Decision tools, retrieval systems, and domain-aware models designed around the work your team actually does.",
  },
  {
    number: "03 / See",
    title: "Computer Vision",
    copy: "Inspection, detection, and document intelligence that turn visual inputs into reliable operational signals.",
  },
  {
    number: "04 / Speak",
    title: "Voice Intelligence",
    copy: "Natural voice agents for inbound support, qualification, scheduling, and follow-up with clear human handoffs.",
  },
  {
    number: "05 / Assist",
    title: "Business AI Assistants",
    copy: "Embedded copilots that find context, draft next steps, and keep teams moving across everyday workflows.",
  },
  {
    number: "06 / Connect",
    title: "Automation & Integration",
    copy: "Durable connections between your data, tools, and teams so the right work happens without the chase.",
  },
];

const industries = [
  ["01", "Healthcare", "Imaging, intake, and clinical operations"],
  ["02", "Logistics", "Fleet, warehouse, and routing intelligence"],
  ["03", "Financial Services", "Risk, service, and decision workflows"],
  ["04", "Manufacturing", "Inspection, quality, and throughput"],
  ["05", "Retail", "Demand, customer experience, and support"],
  ["06", "Professional Services", "Knowledge systems and delivery operations"],
];

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-brand">
      <span className="h-px w-8 bg-brand/30" />
      <span>{children}</span>
    </div>
  );
}

function ExoclustHome() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-paper text-ink selection:bg-brand/15">
      <div className="pointer-events-none absolute -left-40 -top-32 size-[28rem] rounded-full bg-brand/5 blur-[120px] signal-drift" />
      <div className="pointer-events-none absolute right-[-15rem] top-[32rem] size-[34rem] rounded-full bg-accent/5 blur-[130px] signal-drift" />

      <header className="sticky top-0 z-40 border-b border-line-soft bg-paper/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#top" className="flex items-center gap-2.5 font-display text-xl font-semibold tracking-tight" aria-label="Exoclust home">
            <span className="grid size-8 place-items-center rounded-lg bg-brand text-sm font-sans font-semibold text-brand-foreground shadow-[0_0_18px_-5px] shadow-brand/50">E</span>
            <span>Exoclust</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-ink/65 md:flex" aria-label="Primary navigation">
            <a href="#capabilities" className="transition-colors hover:text-brand">Capabilities</a>
            <a href="#industries" className="transition-colors hover:text-brand">Industries</a>
            <a href="#approach" className="transition-colors hover:text-brand">Approach</a>
            <a href="#contact" className="transition-colors hover:text-brand">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground shadow-[0_0_15px_-3px] shadow-brand/40 transition-transform hover:-translate-y-0.5">
            Start a project
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <button type="button" className="ml-3 rounded-full p-2 text-ink md:hidden" aria-label="Open navigation menu">
            <Menu className="size-5" aria-hidden="true" />
          </button>
        </div>
      </header>

      <section id="top" className="relative z-10 border-b border-line-soft">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-28">
          <div className="grid items-center gap-16 md:grid-cols-12">
            <div className="md:col-span-7">
              <SectionLabel>Applied intelligence</SectionLabel>
              <h1 className="mt-8 max-w-[11ch] font-display text-5xl font-semibold leading-[1.06] tracking-tight md:text-6xl">
                We turn complex systems into <span className="relative inline text-brand">clear momentum<span className="absolute -inset-x-2 -inset-y-1 -z-10 bg-brand/5 blur-lg" /></span>.
              </h1>
              <p className="mt-8 max-w-[46ch] text-base leading-relaxed text-ink/70">
                Exoclust is a technology partner for teams shipping real intelligence. We design, build, and operate the systems that make important work easier to see, decide, and move.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-[0_0_20px_-5px] shadow-brand/50 transition-transform hover:-translate-y-0.5">
                  Start a project
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
                <a href="#capabilities" className="inline-flex items-center gap-2 rounded-full bg-glass px-6 py-3 text-sm font-semibold text-ink ring-1 ring-ink/10 backdrop-blur-md transition-colors hover:bg-glass-strong">
                  Review capabilities
                  <ChevronRight className="size-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="relative md:col-span-5">
              <div className="absolute -inset-4 rounded-full bg-brand/5 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl bg-glass-strong p-5 shadow-[0_20px_50px_-12px] shadow-deep/10 ring-1 ring-white/70 backdrop-blur-xl md:p-7">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/45">Core telemetry</span>
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-60" />
                    <span className="relative inline-flex size-2 rounded-full bg-brand telemetry-pulse" />
                  </span>
                </div>
                <div className="relative mt-6 aspect-[16/11] overflow-hidden rounded-xl bg-brand/5 ring-1 ring-ink/5">
                  <img src={signalImage} alt="Abstract blue light trails flowing through a glass-like technical system" width={1200} height={900} className="size-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep/25 via-transparent to-white/10" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-glass-strong px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-brand backdrop-blur-md">Signal visualized</span>
                </div>
                <div className="mt-7 space-y-5">
                  <Telemetry label="Decision velocity" value="92.4" width="92%" />
                  <Telemetry label="Signal coherence" value="84.1" width="84%" accent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-12" aria-label="Exoclust at a glance">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-line-soft shadow-sm ring-1 ring-line-soft md:grid-cols-4">
            <Metric value="05" label="Core disciplines" />
            <Metric value="03" label="Delivery modes" />
            <Metric value="01" label="Accountable team" />
            <Metric value="24/7" label="Automation ready" />
          </div>
        </div>
      </section>

      <section id="capabilities" className="relative z-10 scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-16 max-w-xl">
            <SectionLabel>Capabilities</SectionLabel>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">A full stack of intelligence, engineered to perform.</h2>
            <p className="mt-5 max-w-[48ch] text-sm leading-relaxed text-ink/65">From the first customer touchpoint to the operations behind it, Exoclust brings design, engineering, and applied intelligence into one accountable team.</p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl bg-line-soft shadow-sm ring-1 ring-line-soft md:grid-cols-3">
            {capabilities.map((capability) => (
              <article key={capability.number} className="group bg-glass-strong p-8 backdrop-blur-md transition-colors hover:bg-white/90 md:p-10">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand/60">{capability.number}</span>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">{capability.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink/60">{capability.copy}</p>
                <MoveUpRight className="mt-8 size-4 text-brand/45 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="relative z-10 border-t border-line-soft scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <SectionLabel>Approach</SectionLabel>
              <h2 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">We build like an instrument, not a brochure.</h2>
              <p className="mt-6 text-base leading-relaxed text-ink/70">Every engagement runs on one spine: understand, design, integrate, and prove. You see the readouts before you see the product, and we ship against useful outcomes.</p>
            </div>
            <div className="md:col-span-7">
              <ol className="divide-y divide-line-soft border-y border-line-soft">
                <ApproachStep number="01" title="Frame the signal" copy="Map the workflow, the friction, and the measure that matters before choosing a tool." />
                <ApproachStep number="02" title="Build the shortest path" copy="Prototype the smallest useful system, then put it in the hands of the people who will use it." />
                <ApproachStep number="03" title="Integrate for adoption" copy="Connect the intelligence to the tools, permissions, and habits already inside your business." />
                <ApproachStep number="04" title="Operate with evidence" copy="Monitor, tune, and document the system so its value compounds after launch." />
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section id="industries" className="relative z-10 border-t border-line-soft scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionLabel>Industries</SectionLabel>
              <h2 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">Where the signal is strongest.</h2>
            </div>
            <p className="max-w-[40ch] text-sm leading-relaxed text-ink/60">We focus where complexity is high, the cost of being slow is real, and better systems make a visible difference.</p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-line-soft ring-1 ring-line-soft sm:grid-cols-2 md:grid-cols-3">
            {industries.map(([number, title, copy]) => (
              <article key={number} className="bg-glass-strong p-7 backdrop-blur-md transition-colors hover:bg-white/90">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand/60">{number}</span>
                <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/55">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 scroll-mt-24 pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-2xl bg-deep px-8 py-20 shadow-[0_24px_60px_-25px] shadow-deep/40 md:px-20 md:py-24">
            <div className="absolute -right-32 -top-32 size-96 rounded-full bg-brand/25 blur-[100px] signal-drift" />
            <div className="absolute -bottom-28 -left-24 size-72 rounded-full bg-accent/15 blur-[90px]" />
            <div className="relative z-10 text-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/50">Initiate contact</p>
              <h2 className="mx-auto mt-8 max-w-[24ch] font-display text-4xl font-semibold leading-tight text-white md:text-5xl">Let&apos;s build the system your next year depends on.</h2>
              <p className="mx-auto mt-8 max-w-[50ch] text-base leading-relaxed text-white/65">Tell us where the complexity lives. We&apos;ll come back with a measured path, a practical timeline, and a clear first step.</p>
              <a href="mailto:exoclust.in@gmail.com" className="mt-12 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold text-brand ring-1 ring-white transition-shadow hover:shadow-[0_0_30px] hover:shadow-white/20">
                Email Exoclust
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
              <p className="mt-4 text-xs text-white/40">Replace this address with your preferred business inbox.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-line-soft bg-glass backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-xl font-semibold tracking-tight">Exoclust</p>
            <p className="mt-1 text-xs text-ink/45">Intelligence engineered for the high-stakes.</p>
          </div>
          <div className="flex flex-wrap gap-6 text-[10px] font-mono uppercase tracking-widest text-ink/45">
            <a href="#capabilities" className="transition-colors hover:text-brand">Capabilities</a>
            <a href="#industries" className="transition-colors hover:text-brand">Industries</a>
            <a href="#contact" className="transition-colors hover:text-brand">Contact</a>
            <span>© 2026</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Telemetry({ label, value, width, accent = false }: { label: string; value: string; width: string; accent?: boolean }) {
  return (
    <div>
      <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.2em] text-ink/50">
        <span>{label}</span><span>{value}</span>
      </div>
      <div className="mt-2 h-1 overflow-hidden rounded-full bg-ink/5">
        <div className={`h-1 rounded-full shadow-[0_0_8px_-1px] shadow-brand/70 ${accent ? "bg-accent" : "bg-brand"}`} style={{ width }} />
      </div>
    </div>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="group bg-glass p-6 backdrop-blur-sm transition-colors hover:bg-glass-strong md:p-8">
      <p className="font-display text-3xl font-semibold text-brand transition-transform group-hover:-translate-y-0.5">{value}</p>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/50">{label}</p>
    </div>
  );
}

function ApproachStep({ number, title, copy }: { number: string; title: string; copy: string }) {
  return (
    <li className="flex gap-5 py-6">
      <span className="pt-1 font-mono text-xs text-brand">{number}</span>
      <div>
        <p className="font-display text-lg font-medium">{title}</p>
        <p className="mt-1.5 max-w-[48ch] text-sm leading-relaxed text-ink/60">{copy}</p>
      </div>
      <CircleCheck className="ml-auto mt-1 size-4 shrink-0 text-brand/35" aria-hidden="true" />
    </li>
  );
}