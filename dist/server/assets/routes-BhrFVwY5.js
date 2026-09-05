import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, AudioLines, BrainCircuit, ChevronRight, Code2, Cpu, Database, Globe, Lightbulb, Network } from "lucide-react";
//#region src/routes/index.tsx?tsr-split=component
var ExoclustLogo = ({ className = "size-9" }) => /* @__PURE__ */ jsx("svg", {
	viewBox: "0 0 100 100",
	fill: "currentColor",
	xmlns: "http://www.w3.org/2000/svg",
	className,
	children: /* @__PURE__ */ jsx("path", { d: "M 8 10 L 48 10 L 33 35 L 33 42 L 53 42 L 72.2 10 L 92 10 L 68 50 L 92 90 L 72.2 90 L 53 58 L 33 58 L 33 65 L 48 90 L 8 90 Z" })
});
var heroBg = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2832&auto=format&fit=crop";
var indHealthcare = "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200";
var indLogistics = "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=1200";
var indFinance = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200";
var indManufacturing = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200";
var indRetail = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200";
var indProfessional = "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200";
function SectionLabel({ children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center justify-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-brand mb-6",
		children: [
			/* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-brand/50" }),
			/* @__PURE__ */ jsx("span", { children }),
			/* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-brand/50" })
		]
	});
}
function SectionLabelLeft({ children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-brand mb-6",
		children: [/* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-brand/50" }), /* @__PURE__ */ jsx("span", { children })]
	});
}
function ExoclustHome() {
	return /* @__PURE__ */ jsxs("main", {
		className: "min-h-screen bg-paper font-sans text-ink selection:bg-brand/15",
		children: [
			/* @__PURE__ */ jsx(Header, {}),
			/* @__PURE__ */ jsx(Hero, {}),
			/* @__PURE__ */ jsx(CapabilitiesBento, {}),
			/* @__PURE__ */ jsx(MethodologyTimeline, {}),
			/* @__PURE__ */ jsx(IndustriesTabs, {}),
			/* @__PURE__ */ jsx(ContactSection, {}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
function Header() {
	return /* @__PURE__ */ jsx("header", {
		className: "absolute top-0 w-full z-50 border-b border-white/10 bg-deep/40 backdrop-blur-md",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white",
			children: [
				/* @__PURE__ */ jsxs("a", {
					href: "#top",
					className: "flex items-center gap-3 transition-opacity hover:opacity-90",
					"aria-label": "Exoclust home",
					children: [/* @__PURE__ */ jsx(ExoclustLogo, {}), /* @__PURE__ */ jsxs("span", {
						className: "text-2xl font-sans font-bold tracking-tighter text-white",
						children: ["Exoclust", /* @__PURE__ */ jsx("span", {
							className: "text-blue-500",
							children: "."
						})]
					})]
				}),
				/* @__PURE__ */ jsxs("nav", {
					className: "hidden items-center gap-10 text-sm font-medium md:flex",
					children: [
						/* @__PURE__ */ jsx("a", {
							href: "#capabilities",
							className: "hover:text-brand transition-colors",
							children: "Capabilities"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#approach",
							className: "hover:text-brand transition-colors",
							children: "Approach"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#industries",
							className: "hover:text-brand transition-colors",
							children: "Industries"
						})
					]
				}),
				/* @__PURE__ */ jsx("a", {
					href: "#contact",
					className: "hidden md:inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white ring-1 ring-white/20 transition-colors hover:bg-white hover:text-deep",
					children: "Start a project"
				})
			]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ jsxs("section", {
		id: "top",
		className: "relative min-h-screen flex flex-col justify-center overflow-hidden bg-deep text-white pt-20",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "absolute inset-0 z-0",
				children: [
					/* @__PURE__ */ jsx("img", {
						src: heroBg,
						alt: "Abstract Data Visualization",
						className: "w-full h-full object-cover opacity-30 mix-blend-screen"
					}),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-deep/50 via-deep/80 to-deep" }),
					/* @__PURE__ */ jsx("div", { className: "absolute top-1/4 left-1/4 w-96 h-96 bg-brand/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" }),
					/* @__PURE__ */ jsx("div", { className: "absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-accent/20 rounded-full blur-[150px] mix-blend-screen animate-pulse delay-1000" })
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative mx-auto w-full max-w-5xl px-6 z-10 text-center",
				children: [
					/* @__PURE__ */ jsxs("h1", {
						className: "text-5xl md:text-7xl lg:text-[5rem] font-display font-semibold leading-[1.05] tracking-tight mb-8",
						children: [
							"Applied intelligence, ",
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx("span", {
								className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 drop-shadow-md",
								children: "Engineered."
							})
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mx-auto text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed mb-12",
						children: "We turn complex systems into clear momentum. Exoclust designs, builds, and operates the systems that make important work easier to see, decide, and move."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-col sm:flex-row items-center justify-center gap-4",
						children: [/* @__PURE__ */ jsxs("a", {
							href: "#contact",
							className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-sm font-semibold text-brand-foreground shadow-[0_0_20px_-5px] shadow-brand/50 transition-transform hover:-translate-y-0.5",
							children: ["Initiate Project", /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })]
						}), /* @__PURE__ */ jsx("a", {
							href: "#capabilities",
							className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-glass px-8 py-4 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur-md transition-colors hover:bg-glass-strong",
							children: "Explore Capabilities"
						})]
					})
				]
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" })
		]
	});
}
function CapabilitiesBento() {
	return /* @__PURE__ */ jsx("section", {
		id: "capabilities",
		className: "py-32 bg-paper text-ink relative",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "text-center mb-16",
				children: [
					/* @__PURE__ */ jsx(SectionLabel, { children: "Core Capabilities" }),
					/* @__PURE__ */ jsx("h2", {
						className: "text-4xl md:text-5xl font-display font-semibold mb-6",
						children: "A full stack of intelligence."
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mx-auto max-w-2xl text-ink/65 text-lg",
						children: "From the first customer touchpoint to the operations behind it, Exoclust brings design, engineering, and applied intelligence into one accountable team."
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "md:col-span-2 rounded-3xl bg-white border border-line-soft p-8 relative overflow-hidden group hover:shadow-lg hover:shadow-brand/5 transition-all",
						children: [/* @__PURE__ */ jsx("div", {
							className: "absolute top-0 right-0 p-8 text-brand/10 group-hover:text-brand/20 transition-colors",
							children: /* @__PURE__ */ jsx(BrainCircuit, { className: "w-48 h-48 -mr-10 -mt-10" })
						}), /* @__PURE__ */ jsxs("div", {
							className: "relative z-10 h-full flex flex-col",
							children: [/* @__PURE__ */ jsx("div", {
								className: "font-mono text-xs uppercase tracking-widest text-brand mb-auto",
								children: "02 / Reason"
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
								className: "text-3xl font-display font-semibold mb-4 text-ink",
								children: "Applied AI Systems"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-ink/65 max-w-md leading-relaxed text-lg",
								children: "Decision tools, retrieval systems, and domain-aware models designed around the work your team actually does."
							})] })]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "md:row-span-2 rounded-3xl bg-deep text-white p-8 relative overflow-hidden group",
						children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-brand/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" }), /* @__PURE__ */ jsxs("div", {
							className: "relative z-10 h-full flex flex-col",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "font-mono text-xs uppercase tracking-widest text-white/50 mb-auto",
									children: "06 / Connect"
								}),
								/* @__PURE__ */ jsx("div", {
									className: "flex-1 flex items-center justify-center py-10",
									children: /* @__PURE__ */ jsx(Network, {
										className: "w-24 h-24 text-brand",
										strokeWidth: 1
									})
								}),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("h3", {
									className: "text-3xl font-display font-semibold mb-4",
									children: [
										"Automation &",
										/* @__PURE__ */ jsx("br", {}),
										"Integration"
									]
								}), /* @__PURE__ */ jsx("p", {
									className: "text-white/70 leading-relaxed",
									children: "Durable connections between your data, tools, and teams so the right work happens without the chase."
								})] })
							]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "rounded-3xl bg-white border border-line-soft p-8 relative overflow-hidden group hover:shadow-lg hover:shadow-brand/5 transition-all",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex justify-between items-start mb-auto",
							children: [/* @__PURE__ */ jsx("div", {
								className: "font-mono text-xs uppercase tracking-widest text-brand",
								children: "01 / Build"
							}), /* @__PURE__ */ jsx(Code2, { className: "w-6 h-6 text-ink/20" })]
						}), /* @__PURE__ */ jsxs("div", {
							className: "mt-8",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-xl font-display font-semibold mb-2 text-ink",
								children: "Web Product Eng."
							}), /* @__PURE__ */ jsx("p", {
								className: "text-sm text-ink/65 leading-relaxed",
								children: "Fast, accessible websites and web products that make your offer easier to understand, use, and scale."
							})]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "rounded-3xl bg-white border border-line-soft p-8 relative overflow-hidden group hover:shadow-lg hover:shadow-brand/5 transition-all",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex justify-between items-start mb-auto",
							children: [/* @__PURE__ */ jsx("div", {
								className: "font-mono text-xs uppercase tracking-widest text-brand",
								children: "03 / See"
							}), /* @__PURE__ */ jsx(Globe, { className: "w-6 h-6 text-ink/20" })]
						}), /* @__PURE__ */ jsxs("div", {
							className: "mt-8",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-xl font-display font-semibold mb-2 text-ink",
								children: "Computer Vision"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-sm text-ink/65 leading-relaxed",
								children: "Inspection, detection, and document intelligence that turn visual inputs into reliable signals."
							})]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "rounded-3xl bg-brand text-brand-foreground p-8 relative overflow-hidden group shadow-md shadow-brand/20",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex justify-between items-start mb-auto",
							children: [/* @__PURE__ */ jsx("div", {
								className: "font-mono text-xs uppercase tracking-widest text-white/70",
								children: "04 / Speak"
							}), /* @__PURE__ */ jsx(AudioLines, { className: "w-6 h-6 text-white/50" })]
						}), /* @__PURE__ */ jsxs("div", {
							className: "mt-8",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-xl font-display font-semibold mb-2",
								children: "Voice Intelligence"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-sm text-white/80 leading-relaxed",
								children: "Natural voice agents for inbound support, qualification, scheduling, and follow-up."
							})]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "rounded-3xl bg-white border border-line-soft p-8 relative overflow-hidden group hover:shadow-lg hover:shadow-brand/5 transition-all",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex justify-between items-start mb-auto",
							children: [/* @__PURE__ */ jsx("div", {
								className: "font-mono text-xs uppercase tracking-widest text-brand",
								children: "05 / Assist"
							}), /* @__PURE__ */ jsx(Cpu, { className: "w-6 h-6 text-ink/20" })]
						}), /* @__PURE__ */ jsxs("div", {
							className: "mt-8",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-xl font-display font-semibold mb-2 text-ink",
								children: "Business AI Assistants"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-sm text-ink/65 leading-relaxed",
								children: "Embedded copilots that find context, draft next steps, and keep teams moving."
							})]
						})]
					})
				]
			})]
		})
	});
}
function MethodologyTimeline() {
	return /* @__PURE__ */ jsx("section", {
		id: "approach",
		className: "py-32 bg-white text-ink border-t border-line-soft",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-20 items-center",
			children: [/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx(SectionLabelLeft, { children: "Our Methodology" }),
				/* @__PURE__ */ jsxs("h2", {
					className: "text-4xl md:text-5xl font-display font-semibold leading-tight mb-8",
					children: [
						"We build like an instrument, ",
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("span", {
							className: "text-ink/40",
							children: "not a brochure."
						})
					]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-lg text-ink/70 leading-relaxed mb-10 max-w-md",
					children: "Every engagement runs on one spine: understand, design, integrate, and prove. You see the readouts before you see the product, and we ship against useful outcomes."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-2 gap-6 p-6 rounded-2xl bg-paper border border-line-soft",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
						className: "text-3xl font-display font-semibold text-brand mb-1",
						children: "350+"
					}), /* @__PURE__ */ jsx("div", {
						className: "text-xs font-mono uppercase text-ink/50 tracking-wider",
						children: "Deliveries"
					})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
						className: "text-3xl font-display font-semibold text-brand mb-1",
						children: "110+"
					}), /* @__PURE__ */ jsx("div", {
						className: "text-xs font-mono uppercase text-ink/50 tracking-wider",
						children: "Experts"
					})] })]
				})
			] }), /* @__PURE__ */ jsxs("div", {
				className: "relative",
				children: [/* @__PURE__ */ jsx("div", { className: "absolute left-[27px] top-4 bottom-4 w-px bg-line-soft" }), /* @__PURE__ */ jsx("div", {
					className: "space-y-12",
					children: [
						{
							num: "01",
							title: "Frame the signal",
							copy: "Map the workflow, the friction, and the measure that matters before choosing a tool."
						},
						{
							num: "02",
							title: "Build the shortest path",
							copy: "Prototype the smallest useful system, then put it in the hands of the people who will use it."
						},
						{
							num: "03",
							title: "Integrate for adoption",
							copy: "Connect the intelligence to the tools, permissions, and habits already inside your business."
						},
						{
							num: "04",
							title: "Operate with evidence",
							copy: "Monitor, tune, and document the system so its value compounds after launch."
						}
					].map((step, idx) => /* @__PURE__ */ jsxs("div", {
						className: "relative flex gap-10 group",
						children: [/* @__PURE__ */ jsx("div", {
							className: "relative z-10 w-14 h-14 rounded-full bg-paper border border-line-soft flex items-center justify-center shrink-0 group-hover:border-brand group-hover:text-brand transition-colors",
							children: /* @__PURE__ */ jsx("span", {
								className: "font-mono text-sm",
								children: step.num
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "pt-3",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-2xl font-display font-semibold mb-3 group-hover:text-brand transition-colors",
								children: step.title
							}), /* @__PURE__ */ jsx("p", {
								className: "text-ink/65 leading-relaxed text-base",
								children: step.copy
							})]
						})]
					}, idx))
				})]
			})]
		})
	});
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
	return /* @__PURE__ */ jsx("section", {
		id: "industries",
		className: "py-32 bg-paper text-ink border-t border-line-soft",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "text-center mb-16",
				children: [/* @__PURE__ */ jsx(SectionLabel, { children: "Industries" }), /* @__PURE__ */ jsx("h2", {
					className: "text-4xl md:text-5xl font-display font-semibold",
					children: "Where the signal is strongest."
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "grid lg:grid-cols-12 gap-12 bg-white rounded-3xl border border-line-soft overflow-hidden p-2",
				children: [/* @__PURE__ */ jsx("div", {
					className: "lg:col-span-4 p-4 space-y-2",
					children: industries.map((ind, idx) => /* @__PURE__ */ jsxs("button", {
						onClick: () => setActiveTab(idx),
						className: `w-full text-left px-6 py-5 rounded-2xl transition-all duration-300 flex justify-between items-center ${activeTab === idx ? "bg-brand text-white shadow-md shadow-brand/20" : "hover:bg-paper text-ink/70"}`,
						children: [/* @__PURE__ */ jsx("span", {
							className: "font-display font-semibold text-lg",
							children: ind.title
						}), /* @__PURE__ */ jsx(ChevronRight, { className: `w-5 h-5 transition-transform ${activeTab === idx ? "opacity-100" : "opacity-0 -translate-x-2"}` })]
					}, idx))
				}), /* @__PURE__ */ jsx("div", {
					className: "lg:col-span-8 p-4",
					children: /* @__PURE__ */ jsx("div", {
						className: "relative w-full h-[500px] rounded-2xl overflow-hidden group",
						children: industries.map((ind, idx) => /* @__PURE__ */ jsxs("div", {
							className: `absolute inset-0 transition-opacity duration-500 ease-in-out ${activeTab === idx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}`,
							children: [
								/* @__PURE__ */ jsx("img", {
									src: ind.img,
									alt: ind.title,
									className: "w-full h-full object-cover"
								}),
								/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-deep via-deep/40 to-transparent" }),
								/* @__PURE__ */ jsxs("div", {
									className: "absolute bottom-0 left-0 p-10 w-full text-white",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "font-mono text-xs uppercase tracking-widest text-brand mb-4",
											children: [
												"0",
												idx + 1,
												" / Industry"
											]
										}),
										/* @__PURE__ */ jsx("h3", {
											className: "text-4xl font-display font-semibold mb-4",
											children: ind.title
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-lg text-white/80 max-w-xl leading-relaxed mb-8",
											children: ind.desc
										}),
										/* @__PURE__ */ jsxs("a", {
											href: "#contact",
											className: "inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5",
											children: ["Explore solutions ", /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })]
										})
									]
								})
							]
						}, idx))
					})
				})]
			})]
		})
	});
}
function ContactSection() {
	return /* @__PURE__ */ jsx("section", {
		id: "contact",
		className: "py-32 bg-deep border-t border-line-soft",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-20 items-center",
			children: [/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsxs("div", {
					className: "inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 mb-6",
					children: [/* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-white/20" }), /* @__PURE__ */ jsx("span", { children: "Initiate contact" })]
				}),
				/* @__PURE__ */ jsxs("h2", {
					className: "text-4xl md:text-6xl font-display font-semibold text-white mb-8 leading-tight",
					children: [
						"Let's build the system your ",
						/* @__PURE__ */ jsx("span", {
							className: "text-brand",
							children: "next year"
						}),
						" depends on."
					]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-white/60 mb-12 text-lg md:text-xl leading-relaxed max-w-lg",
					children: "Tell us where the complexity lives. We'll come back with a measured path, a practical timeline, and a clear first step."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-6",
						children: [/* @__PURE__ */ jsx("div", {
							className: "w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0",
							children: /* @__PURE__ */ jsx(Database, { className: "w-6 h-6 text-brand" })
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							className: "font-semibold text-white mb-1",
							children: "Architecture Review"
						}), /* @__PURE__ */ jsx("div", {
							className: "text-sm text-white/50",
							children: "Comprehensive audit of your data foundation."
						})] })]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-6",
						children: [/* @__PURE__ */ jsx("div", {
							className: "w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0",
							children: /* @__PURE__ */ jsx(Lightbulb, { className: "w-6 h-6 text-brand" })
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							className: "font-semibold text-white mb-1",
							children: "Feasibility Study"
						}), /* @__PURE__ */ jsx("div", {
							className: "text-sm text-white/50",
							children: "Rapid prototyping of AI use cases."
						})] })]
					})]
				})
			] }), /* @__PURE__ */ jsxs("div", {
				className: "bg-white p-10 md:p-12 rounded-[2rem] shadow-2xl",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "mb-8",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "text-2xl font-display font-semibold text-ink mb-2",
						children: "Start a conversation"
					}), /* @__PURE__ */ jsxs("p", {
						className: "text-ink/60",
						children: ["Fill out the form below or email ", /* @__PURE__ */ jsx("a", {
							href: "mailto:hello@exoclust.com",
							className: "text-brand hover:underline",
							children: "hello@exoclust.com"
						})]
					})]
				}), /* @__PURE__ */ jsxs("form", {
					className: "space-y-6",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-2 gap-6",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("label", {
								className: "block text-xs font-mono uppercase tracking-widest mb-2 text-ink/70",
								children: ["First Name ", /* @__PURE__ */ jsx("span", {
									className: "text-brand",
									children: "*"
								})]
							}), /* @__PURE__ */ jsx("input", {
								type: "text",
								className: "w-full bg-paper border-b border-line-soft p-3 text-sm focus:outline-none focus:border-brand transition-colors"
							})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("label", {
								className: "block text-xs font-mono uppercase tracking-widest mb-2 text-ink/70",
								children: ["Last Name ", /* @__PURE__ */ jsx("span", {
									className: "text-brand",
									children: "*"
								})]
							}), /* @__PURE__ */ jsx("input", {
								type: "text",
								className: "w-full bg-paper border-b border-line-soft p-3 text-sm focus:outline-none focus:border-brand transition-colors"
							})] })]
						}),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("label", {
							className: "block text-xs font-mono uppercase tracking-widest mb-2 text-ink/70",
							children: ["Work Email ", /* @__PURE__ */ jsx("span", {
								className: "text-brand",
								children: "*"
							})]
						}), /* @__PURE__ */ jsx("input", {
							type: "email",
							className: "w-full bg-paper border-b border-line-soft p-3 text-sm focus:outline-none focus:border-brand transition-colors"
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							className: "block text-xs font-mono uppercase tracking-widest mb-2 text-ink/70",
							children: "Project Details"
						}), /* @__PURE__ */ jsx("textarea", {
							rows: 4,
							placeholder: "What workflow or problem are you looking to solve?",
							className: "w-full bg-paper border border-line-soft rounded-xl p-4 text-sm focus:outline-none focus:border-brand transition-colors resize-none mt-2"
						})] }),
						/* @__PURE__ */ jsx("div", {
							className: "pt-4",
							children: /* @__PURE__ */ jsxs("button", {
								type: "button",
								className: "w-full flex items-center justify-between bg-ink text-white px-8 py-5 rounded-xl font-semibold shadow-xl shadow-ink/20 transition-transform hover:-translate-y-1",
								children: [/* @__PURE__ */ jsx("span", { children: "Submit Inquiry" }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5" })]
							})
						})
					]
				})]
			})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ jsx("footer", {
		className: "bg-deep border-t border-white/10 text-white py-12",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex max-w-7xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between",
			children: [
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("a", {
					href: "#top",
					className: "flex items-center gap-3 mb-2 transition-opacity hover:opacity-90",
					children: [/* @__PURE__ */ jsx(ExoclustLogo, { className: "size-8" }), /* @__PURE__ */ jsxs("span", {
						className: "text-2xl font-sans font-bold tracking-tighter text-white",
						children: ["Exoclust", /* @__PURE__ */ jsx("span", {
							className: "text-blue-500",
							children: "."
						})]
					})]
				}), /* @__PURE__ */ jsx("p", {
					className: "text-sm text-white/45",
					children: "Intelligence engineered for the high-stakes."
				})] }),
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-wrap gap-8 text-xs font-mono uppercase tracking-widest text-white/45",
					children: [
						/* @__PURE__ */ jsx("a", {
							href: "#capabilities",
							className: "transition-colors hover:text-white",
							children: "Capabilities"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#industries",
							className: "transition-colors hover:text-white",
							children: "Industries"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#approach",
							className: "transition-colors hover:text-white",
							children: "Approach"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#contact",
							className: "transition-colors hover:text-white",
							children: "Contact"
						})
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "text-xs font-mono text-white/30",
					children: /* @__PURE__ */ jsxs("span", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" EXOCLUST INC."
					] })
				})
			]
		})
	});
}
//#endregion
export { ExoclustHome as component };
