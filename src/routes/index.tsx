import { ArrowRight, ChevronRight, Activity, Database, Globe, BrainCircuit, Cpu, AudioLines, Code2, Network, ArrowUpRight, Lightbulb, Hexagon } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

const ExoclustLogo = ({ className = "size-9" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M 8 10 L 48 10 L 33 35 L 33 42 L 53 42 L 72.2 10 L 92 10 L 68 50 L 92 90 L 72.2 90 L 53 58 L 33 58 L 33 65 L 48 90 L 8 90 Z" />
  </svg>
);

const heroBg = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2832&auto=format&fit=crop"; // Dark tech network

const indHealthcare = "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200";
const indLogistics = "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=1200";
const indFinance = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200";
const indManufacturing = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200";
const indRetail = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200";
const indProfessional = "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200";

export const Route = createFileRoute("/")({
  component: ExoclustHome,
});

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center justify-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-brand mb-6">
      <span className="h-px w-8 bg-brand/50" />
      <span>{children}</span>
      <span className="h-px w-8 bg-brand/50" />
    </div>
  );
}

function SectionLabelLeft({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-brand mb-6">
      <span className="h-px w-8 bg-brand/50" />
      <span>{children}</span>
    </div>
  );
}

function ExoclustHome() {
  return (
    <main className="min-h-screen bg-paper font-sans text-ink selection:bg-brand/15">
      <Header />
      <Hero />
      <CapabilitiesBento />
      <MethodologyTimeline />
      <IndustriesTabs />
      <ContactSection />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="absolute top-0 w-full z-50 border-b border-white/10 bg-deep/40 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <a href="#top" className="flex items-center gap-3 transition-opacity hover:opacity-90" aria-label="Exoclust home">
          <ExoclustLogo />
          <span className="text-2xl font-sans font-bold tracking-tighter text-white">
            Exoclust<span className="text-blue-500">.</span>
          </span>
        </a>
        <nav className="hidden items-center gap-10 text-sm font-medium md:flex">
          <a href="#capabilities" className="hover:text-brand transition-colors">Capabilities</a>
          <a href="#approach" className="hover:text-brand transition-colors">Approach</a>
          <a href="#industries" className="hover:text-brand transition-colors">Industries</a>
        </nav>
        <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white ring-1 ring-white/20 transition-colors hover:bg-white hover:text-deep">
          Start a project
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-deep text-white pt-20">
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Abstract Data Visualization" className="w-full h-full object-cover opacity-30 mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-b from-deep/50 via-deep/80 to-deep"></div>
        
        {/* Animated geometric elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-accent/20 rounded-full blur-[150px] mix-blend-screen animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative mx-auto w-full max-w-5xl px-6 z-10 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-display font-semibold leading-[1.05] tracking-tight mb-8">
          Applied intelligence, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 drop-shadow-md">Engineered.</span>
        </h1>
        
        <p className="mx-auto text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed mb-12">
          We turn complex systems into clear momentum. Exoclust designs, builds, and operates the systems that make important work easier to see, decide, and move.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-sm font-semibold text-brand-foreground shadow-[0_0_20px_-5px] shadow-brand/50 transition-transform hover:-translate-y-0.5">
            Initiate Project
            <ArrowRight className="size-4" />
          </a>
          <a href="#capabilities" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-glass px-8 py-4 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur-md transition-colors hover:bg-glass-strong">
            Explore Capabilities
          </a>
        </div>
      </div>
      
      {/* Decorative grid line at bottom */}
      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </section>
  );
}

function CapabilitiesBento() {
  return (
    <section id="capabilities" className="py-32 bg-paper text-ink relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <SectionLabel>Core Capabilities</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">A full stack of intelligence.</h2>
          <p className="mx-auto max-w-2xl text-ink/65 text-lg">
            From the first customer touchpoint to the operations behind it, Exoclust brings design, engineering, and applied intelligence into one accountable team.
          </p>
        </div>
        
        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          
          {/* Large Card */}
          <div className="md:col-span-2 rounded-3xl bg-white border border-line-soft p-8 relative overflow-hidden group hover:shadow-lg hover:shadow-brand/5 transition-all">
            <div className="absolute top-0 right-0 p-8 text-brand/10 group-hover:text-brand/20 transition-colors">
              <BrainCircuit className="w-48 h-48 -mr-10 -mt-10" />
            </div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="font-mono text-xs uppercase tracking-widest text-brand mb-auto">02 / Reason</div>
              <div>
                <h3 className="text-3xl font-display font-semibold mb-4 text-ink">Applied AI Systems</h3>
                <p className="text-ink/65 max-w-md leading-relaxed text-lg">
                  Decision tools, retrieval systems, and domain-aware models designed around the work your team actually does.
                </p>
              </div>
            </div>
          </div>
          
          {/* Tall Card */}
          <div className="md:row-span-2 rounded-3xl bg-deep text-white p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-brand/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="font-mono text-xs uppercase tracking-widest text-white/50 mb-auto">06 / Connect</div>
              <div className="flex-1 flex items-center justify-center py-10">
                <Network className="w-24 h-24 text-brand" strokeWidth={1} />
              </div>
              <div>
                <h3 className="text-3xl font-display font-semibold mb-4">Automation &<br/>Integration</h3>
                <p className="text-white/70 leading-relaxed">
                  Durable connections between your data, tools, and teams so the right work happens without the chase.
                </p>
              </div>
            </div>
          </div>
          
          {/* Small Cards */}
          <div className="rounded-3xl bg-white border border-line-soft p-8 relative overflow-hidden group hover:shadow-lg hover:shadow-brand/5 transition-all">
            <div className="flex justify-between items-start mb-auto">
               <div className="font-mono text-xs uppercase tracking-widest text-brand">01 / Build</div>
               <Code2 className="w-6 h-6 text-ink/20" />
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-display font-semibold mb-2 text-ink">Web Product Eng.</h3>
              <p className="text-sm text-ink/65 leading-relaxed">Fast, accessible websites and web products that make your offer easier to understand, use, and scale.</p>
            </div>
          </div>
          
          <div className="rounded-3xl bg-white border border-line-soft p-8 relative overflow-hidden group hover:shadow-lg hover:shadow-brand/5 transition-all">
            <div className="flex justify-between items-start mb-auto">
               <div className="font-mono text-xs uppercase tracking-widest text-brand">03 / See</div>
               <Globe className="w-6 h-6 text-ink/20" />
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-display font-semibold mb-2 text-ink">Computer Vision</h3>
              <p className="text-sm text-ink/65 leading-relaxed">Inspection, detection, and document intelligence that turn visual inputs into reliable signals.</p>
            </div>
          </div>
          
          <div className="rounded-3xl bg-brand text-brand-foreground p-8 relative overflow-hidden group shadow-md shadow-brand/20">
            <div className="flex justify-between items-start mb-auto">
               <div className="font-mono text-xs uppercase tracking-widest text-white/70">04 / Speak</div>
               <AudioLines className="w-6 h-6 text-white/50" />
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-display font-semibold mb-2">Voice Intelligence</h3>
              <p className="text-sm text-white/80 leading-relaxed">Natural voice agents for inbound support, qualification, scheduling, and follow-up.</p>
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-line-soft p-8 relative overflow-hidden group hover:shadow-lg hover:shadow-brand/5 transition-all">
            <div className="flex justify-between items-start mb-auto">
               <div className="font-mono text-xs uppercase tracking-widest text-brand">05 / Assist</div>
               <Cpu className="w-6 h-6 text-ink/20" />
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-display font-semibold mb-2 text-ink">Business AI Assistants</h3>
              <p className="text-sm text-ink/65 leading-relaxed">Embedded copilots that find context, draft next steps, and keep teams moving.</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

function MethodologyTimeline() {
  const steps = [
    { num: "01", title: "Frame the signal", copy: "Map the workflow, the friction, and the measure that matters before choosing a tool." },
    { num: "02", title: "Build the shortest path", copy: "Prototype the smallest useful system, then put it in the hands of the people who will use it." },
    { num: "03", title: "Integrate for adoption", copy: "Connect the intelligence to the tools, permissions, and habits already inside your business." },
    { num: "04", title: "Operate with evidence", copy: "Monitor, tune, and document the system so its value compounds after launch." }
  ];

  return (
    <section id="approach" className="py-32 bg-white text-ink border-t border-line-soft">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <SectionLabelLeft>Our Methodology</SectionLabelLeft>
          <h2 className="text-4xl md:text-5xl font-display font-semibold leading-tight mb-8">
            We build like an instrument, <br/><span className="text-ink/40">not a brochure.</span>
          </h2>
          <p className="text-lg text-ink/70 leading-relaxed mb-10 max-w-md">
            Every engagement runs on one spine: understand, design, integrate, and prove. You see the readouts before you see the product, and we ship against useful outcomes.
          </p>
          
          <div className="grid grid-cols-2 gap-6 p-6 rounded-2xl bg-paper border border-line-soft">
            <div>
               <div className="text-3xl font-display font-semibold text-brand mb-1">350+</div>
               <div className="text-xs font-mono uppercase text-ink/50 tracking-wider">Deliveries</div>
            </div>
            <div>
               <div className="text-3xl font-display font-semibold text-brand mb-1">110+</div>
               <div className="text-xs font-mono uppercase text-ink/50 tracking-wider">Experts</div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          {/* Vertical line connecting steps */}
          <div className="absolute left-[27px] top-4 bottom-4 w-px bg-line-soft"></div>
          
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex gap-10 group">
                {/* Number Circle */}
                <div className="relative z-10 w-14 h-14 rounded-full bg-paper border border-line-soft flex items-center justify-center shrink-0 group-hover:border-brand group-hover:text-brand transition-colors">
                  <span className="font-mono text-sm">{step.num}</span>
                </div>
                
                {/* Content */}
                <div className="pt-3">
                  <h3 className="text-2xl font-display font-semibold mb-3 group-hover:text-brand transition-colors">{step.title}</h3>
                  <p className="text-ink/65 leading-relaxed text-base">{step.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustriesTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const industries = [
    {
      title: "Healthcare",
      desc: "Streamline clinical operations with secure AI and automation. We build systems for imaging analysis, patient intake workflows, and operational intelligence that allow providers to focus on care rather than paperwork.",
      img: indHealthcare
    },
    {
      title: "Logistics",
      desc: "Logistics operations depend on speed, visibility, and coordination. We help streamline fleet tracking, warehouse intelligence, and routing operations using AI-powered automation and real-time analytics.",
      img: indLogistics
    },
    {
      title: "Financial Services",
      desc: "Navigate complex risk environments and compliance requirements. We engineer decision workflows and intelligent retrieval systems for fast, accurate service and reporting.",
      img: indFinance
    },
    {
      title: "Manufacturing",
      desc: "Modern manufacturing requires faster decisions and efficient operations. We modernize workflows with computer vision inspection, quality automation, and throughput analytics to reduce downtime.",
      img: indManufacturing
    },
    {
      title: "Retail",
      desc: "Align your supply with demand seamlessly. Our intelligence systems handle demand forecasting, automated customer support, and experience optimization across all touchpoints.",
      img: indRetail
    },
    {
      title: "Professional Services",
      desc: "Amplify your team's knowledge and output. We deploy AI assistants and knowledge systems that index past work, draft deliverables, and manage delivery operations.",
      img: indProfessional
    }
  ];

  return (
    <section id="industries" className="py-32 bg-paper text-ink border-t border-line-soft">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <SectionLabel>Industries</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-display font-semibold">Where the signal is strongest.</h2>
        </div>
        
        <div className="grid lg:grid-cols-12 gap-12 bg-white rounded-3xl border border-line-soft overflow-hidden p-2">
          
          {/* Tab List */}
          <div className="lg:col-span-4 p-4 space-y-2">
            {industries.map((ind, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`w-full text-left px-6 py-5 rounded-2xl transition-all duration-300 flex justify-between items-center ${
                  activeTab === idx 
                    ? "bg-brand text-white shadow-md shadow-brand/20" 
                    : "hover:bg-paper text-ink/70"
                }`}
              >
                <span className="font-display font-semibold text-lg">{ind.title}</span>
                <ChevronRight className={`w-5 h-5 transition-transform ${activeTab === idx ? "opacity-100" : "opacity-0 -translate-x-2"}`} />
              </button>
            ))}
          </div>
          
          {/* Tab Content */}
          <div className="lg:col-span-8 p-4">
             <div className="relative w-full h-[500px] rounded-2xl overflow-hidden group">
                {industries.map((ind, idx) => (
                   <div 
                     key={idx} 
                     className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${activeTab === idx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}`}
                   >
                     <img src={ind.img} alt={ind.title} className="w-full h-full object-cover" />
                     <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/40 to-transparent"></div>
                     <div className="absolute bottom-0 left-0 p-10 w-full text-white">
                        <div className="font-mono text-xs uppercase tracking-widest text-brand mb-4">0{idx + 1} / Industry</div>
                        <h3 className="text-4xl font-display font-semibold mb-4">{ind.title}</h3>
                        <p className="text-lg text-white/80 max-w-xl leading-relaxed mb-8">{ind.desc}</p>
                        <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5">
                          Explore solutions <ArrowRight className="w-4 h-4" />
                        </a>
                     </div>
                   </div>
                ))}
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-deep border-t border-line-soft">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-20 items-center">
        
        <div>
           <div className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 mb-6">
             <span className="h-px w-8 bg-white/20" />
             <span>Initiate contact</span>
           </div>
           <h2 className="text-4xl md:text-6xl font-display font-semibold text-white mb-8 leading-tight">
             Let's build the system your <span className="text-brand">next year</span> depends on.
           </h2>
           <p className="text-white/60 mb-12 text-lg md:text-xl leading-relaxed max-w-lg">
             Tell us where the complexity lives. We'll come back with a measured path, a practical timeline, and a clear first step.
           </p>
           
           <div className="space-y-8">
             <div className="flex items-center gap-6">
               <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Database className="w-6 h-6 text-brand" />
               </div>
               <div>
                  <div className="font-semibold text-white mb-1">Architecture Review</div>
                  <div className="text-sm text-white/50">Comprehensive audit of your data foundation.</div>
               </div>
             </div>
             <div className="flex items-center gap-6">
               <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Lightbulb className="w-6 h-6 text-brand" />
               </div>
               <div>
                  <div className="font-semibold text-white mb-1">Feasibility Study</div>
                  <div className="text-sm text-white/50">Rapid prototyping of AI use cases.</div>
               </div>
             </div>
           </div>
        </div>
        
        <div className="bg-white p-10 md:p-12 rounded-[2rem] shadow-2xl">
           <div className="mb-8">
             <h3 className="text-2xl font-display font-semibold text-ink mb-2">Start a conversation</h3>
             <p className="text-ink/60">Fill out the form below or email <a href="mailto:hello@exoclust.com" className="text-brand hover:underline">hello@exoclust.com</a></p>
           </div>
           <form className="space-y-6">
             <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest mb-2 text-ink/70">First Name <span className="text-brand">*</span></label>
                  <input type="text" className="w-full bg-paper border-b border-line-soft p-3 text-sm focus:outline-none focus:border-brand transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest mb-2 text-ink/70">Last Name <span className="text-brand">*</span></label>
                  <input type="text" className="w-full bg-paper border-b border-line-soft p-3 text-sm focus:outline-none focus:border-brand transition-colors" />
                </div>
             </div>
             <div>
                <label className="block text-xs font-mono uppercase tracking-widest mb-2 text-ink/70">Work Email <span className="text-brand">*</span></label>
                <input type="email" className="w-full bg-paper border-b border-line-soft p-3 text-sm focus:outline-none focus:border-brand transition-colors" />
             </div>
             <div>
                <label className="block text-xs font-mono uppercase tracking-widest mb-2 text-ink/70">Project Details</label>
                <textarea rows={4} placeholder="What workflow or problem are you looking to solve?" className="w-full bg-paper border border-line-soft rounded-xl p-4 text-sm focus:outline-none focus:border-brand transition-colors resize-none mt-2"></textarea>
             </div>
             <div className="pt-4">
               <button type="button" className="w-full flex items-center justify-between bg-ink text-white px-8 py-5 rounded-xl font-semibold shadow-xl shadow-ink/20 transition-transform hover:-translate-y-1">
                 <span>Submit Inquiry</span>
                 <ArrowRight className="w-5 h-5" />
               </button>
             </div>
           </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-deep border-t border-white/10 text-white py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <a href="#top" className="flex items-center gap-3 mb-2 transition-opacity hover:opacity-90">
            <ExoclustLogo className="size-8" />
            <span className="text-2xl font-sans font-bold tracking-tighter text-white">
              Exoclust<span className="text-blue-500">.</span>
            </span>
          </a>
          <p className="text-sm text-white/45">Intelligence engineered for the high-stakes.</p>
        </div>
        <div className="flex flex-wrap gap-8 text-xs font-mono uppercase tracking-widest text-white/45">
          <a href="#capabilities" className="transition-colors hover:text-white">Capabilities</a>
          <a href="#industries" className="transition-colors hover:text-white">Industries</a>
          <a href="#approach" className="transition-colors hover:text-white">Approach</a>
          <a href="#contact" className="transition-colors hover:text-white">Contact</a>
        </div>
        <div className="text-xs font-mono text-white/30">
           <span>© {new Date().getFullYear()} EXOCLUST INC.</span>
        </div>
      </div>
    </footer>
  );
}