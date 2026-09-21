import { t as supabase } from "./supabase-B5tVAxod.js";
import { useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import bcrypt from "bcryptjs";
import { ArrowRight, Database, Loader2, LogOut } from "lucide-react";
//#region src/lib/auth.ts
var SESSION_KEY = "exoclust_admin_session";
async function login(username, passwordPlain) {
	const { data, error } = await supabase.from("admins").select("*").eq("username", username).single();
	if (error || !data) throw new Error("Invalid username or password");
	if (!await bcrypt.compare(passwordPlain, data.password_hash)) throw new Error("Invalid username or password");
	const sessionData = {
		username: data.username,
		loggedInAt: Date.now()
	};
	localStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));
	return sessionData;
}
function logout() {
	localStorage.removeItem(SESSION_KEY);
}
function getSession() {
	if (typeof window === "undefined") return null;
	const stored = localStorage.getItem(SESSION_KEY);
	if (!stored) return null;
	try {
		return JSON.parse(stored);
	} catch (e) {
		return null;
	}
}
//#endregion
//#region src/routes/adminpanel.tsx?tsr-split=component
function AdminPanel() {
	const [session, setSession] = useState(null);
	const [isChecking, setIsChecking] = useState(true);
	useEffect(() => {
		const currentSession = getSession();
		if (currentSession) setSession(currentSession);
		setIsChecking(false);
	}, []);
	if (isChecking) return /* @__PURE__ */ jsx("div", {
		className: "min-h-screen bg-deep flex items-center justify-center",
		children: /* @__PURE__ */ jsx(Loader2, { className: "w-8 h-8 text-brand animate-spin" })
	});
	if (!session) return /* @__PURE__ */ jsx(AdminLogin, { onLogin: setSession });
	return /* @__PURE__ */ jsx(AdminDashboard, {
		session,
		onLogout: () => {
			logout();
			setSession(null);
		}
	});
}
function AdminLogin({ onLogin }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setLoading(true);
		try {
			onLogin(await login(username, password));
		} catch (err) {
			setError(err.message || "Login failed");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ jsx("div", {
		className: "min-h-screen bg-deep flex items-center justify-center p-6",
		children: /* @__PURE__ */ jsxs("div", {
			className: "w-full max-w-md bg-paper p-8 rounded-3xl border border-line-soft/10 text-white",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "mb-8 text-center",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand/20 text-brand mb-4",
							children: /* @__PURE__ */ jsx(Database, { className: "w-6 h-6" })
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "text-3xl font-display font-semibold",
							children: "Admin Access"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-white/50 mt-2 text-sm",
							children: "Sign in to view submissions."
						})
					]
				}),
				error && /* @__PURE__ */ jsx("div", {
					className: "mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-sm text-center",
					children: error
				}),
				/* @__PURE__ */ jsxs("form", {
					onSubmit: handleSubmit,
					className: "space-y-6",
					children: [
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							className: "block text-xs font-mono uppercase tracking-widest text-white/50 mb-2",
							children: "Username"
						}), /* @__PURE__ */ jsx("input", {
							type: "text",
							value: username,
							onChange: (e) => setUsername(e.target.value),
							className: "w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm focus:outline-none focus:border-brand transition-colors text-white placeholder-white/30",
							placeholder: "admin",
							required: true
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							className: "block text-xs font-mono uppercase tracking-widest text-white/50 mb-2",
							children: "Password"
						}), /* @__PURE__ */ jsx("input", {
							type: "password",
							value: password,
							onChange: (e) => setPassword(e.target.value),
							className: "w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm focus:outline-none focus:border-brand transition-colors text-white placeholder-white/30",
							placeholder: "••••••••",
							required: true
						})] }),
						/* @__PURE__ */ jsxs("button", {
							type: "submit",
							disabled: loading,
							className: "w-full flex items-center justify-center gap-2 bg-brand text-brand-foreground px-6 py-4 rounded-xl font-semibold shadow-lg shadow-brand/20 transition-transform hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0",
							children: [loading ? /* @__PURE__ */ jsx(Loader2, { className: "w-5 h-5 animate-spin" }) : "Authenticate", !loading && /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5" })]
						})
					]
				})
			]
		})
	});
}
function AdminDashboard({ session, onLogout }) {
	const [submissions, setSubmissions] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		async function fetchSubmissions() {
			try {
				const { data, error } = await supabase.from("contact_submissions").select("*").order("created_at", { ascending: false });
				if (error) throw error;
				setSubmissions(data || []);
			} catch (err) {
				console.error("Failed to fetch submissions", err);
			} finally {
				setLoading(false);
			}
		}
		fetchSubmissions();
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-paper text-ink font-sans",
		children: [/* @__PURE__ */ jsxs("header", {
			className: "bg-white border-b border-line-soft px-6 py-4 flex items-center justify-between sticky top-0 z-10",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-4",
				children: [/* @__PURE__ */ jsx(Database, { className: "w-6 h-6 text-brand" }), /* @__PURE__ */ jsx("h1", {
					className: "text-xl font-display font-semibold",
					children: "Exoclust Control"
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-4",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "text-sm font-mono text-ink/50 uppercase",
					children: ["User: ", /* @__PURE__ */ jsx("span", {
						className: "text-ink font-bold",
						children: session.username
					})]
				}), /* @__PURE__ */ jsxs("button", {
					onClick: onLogout,
					className: "flex items-center gap-2 text-sm text-ink/70 hover:text-red-500 transition-colors",
					children: [/* @__PURE__ */ jsx(LogOut, { className: "w-4 h-4" }), "Logout"]
				})]
			})]
		}), /* @__PURE__ */ jsxs("main", {
			className: "max-w-7xl mx-auto p-6 md:p-12",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mb-8",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-3xl font-display font-semibold mb-2",
					children: "Contact Submissions"
				}), /* @__PURE__ */ jsx("p", {
					className: "text-ink/60",
					children: "View inquiries submitted via the public website."
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "bg-white border border-line-soft rounded-2xl overflow-hidden shadow-sm",
				children: /* @__PURE__ */ jsx("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ jsxs("table", {
						className: "w-full text-left text-sm",
						children: [/* @__PURE__ */ jsx("thead", {
							className: "bg-paper border-b border-line-soft text-ink/70 font-mono text-xs uppercase tracking-wider",
							children: /* @__PURE__ */ jsxs("tr", { children: [
								/* @__PURE__ */ jsx("th", {
									className: "px-6 py-4 font-medium",
									children: "Date"
								}),
								/* @__PURE__ */ jsx("th", {
									className: "px-6 py-4 font-medium",
									children: "Name"
								}),
								/* @__PURE__ */ jsx("th", {
									className: "px-6 py-4 font-medium",
									children: "Email"
								}),
								/* @__PURE__ */ jsx("th", {
									className: "px-6 py-4 font-medium",
									children: "Project Details"
								})
							] })
						}), /* @__PURE__ */ jsx("tbody", {
							className: "divide-y divide-line-soft",
							children: loading ? /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsxs("td", {
								colSpan: 4,
								className: "px-6 py-12 text-center text-ink/50",
								children: [/* @__PURE__ */ jsx(Loader2, { className: "w-6 h-6 animate-spin mx-auto mb-2" }), "Loading submissions..."]
							}) }) : submissions.length === 0 ? /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", {
								colSpan: 4,
								className: "px-6 py-12 text-center text-ink/50",
								children: "No submissions found."
							}) }) : submissions.map((sub) => /* @__PURE__ */ jsxs("tr", {
								className: "hover:bg-paper/50 transition-colors",
								children: [
									/* @__PURE__ */ jsxs("td", {
										className: "px-6 py-4 whitespace-nowrap text-ink/60",
										children: [
											new Date(sub.created_at).toLocaleDateString(),
											" ",
											/* @__PURE__ */ jsx("br", {}),
											/* @__PURE__ */ jsx("span", {
												className: "text-xs",
												children: new Date(sub.created_at).toLocaleTimeString()
											})
										]
									}),
									/* @__PURE__ */ jsxs("td", {
										className: "px-6 py-4 font-medium",
										children: [
											sub.first_name,
											" ",
											sub.last_name
										]
									}),
									/* @__PURE__ */ jsx("td", {
										className: "px-6 py-4 text-brand",
										children: /* @__PURE__ */ jsx("a", {
											href: `mailto:${sub.email}`,
											children: sub.email
										})
									}),
									/* @__PURE__ */ jsx("td", {
										className: "px-6 py-4 max-w-md",
										children: /* @__PURE__ */ jsx("p", {
											className: "line-clamp-3 text-ink/80",
											title: sub.project_details,
											children: sub.project_details || /* @__PURE__ */ jsx("span", {
												className: "text-ink/30 italic",
												children: "No details provided"
											})
										})
									})
								]
							}, sub.id))
						})]
					})
				})
			})]
		})]
	});
}
//#endregion
export { AdminPanel as component };
