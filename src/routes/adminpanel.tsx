import { createFileRoute } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { login, logout, getSession } from '../lib/auth';
import { ArrowRight, Database, LogOut, Loader2 } from 'lucide-react';

export const Route = createFileRoute('/adminpanel')({
  component: AdminPanel,
});

function AdminPanel() {
  const [session, setSession] = useState<any>(null);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const currentSession = getSession();
    if (currentSession) {
      setSession(currentSession);
    }
    setIsChecking(false);
  }, []);

  if (isChecking) {
    return (
      <div className="min-h-screen bg-deep flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-brand animate-spin" />
      </div>
    );
  }

  if (!session) {
    return <AdminLogin onLogin={setSession} />;
  }

  return <AdminDashboard session={session} onLogout={() => { logout(); setSession(null); }} />;
}

function AdminLogin({ onLogin }: { onLogin: (session: any) => void }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const session = await login(username, password);
      onLogin(session);
    } catch (err: any) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-deep flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-paper p-8 rounded-3xl border border-line-soft/10 text-ink shadow-2xl">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand/10 text-brand mb-4">
            <Database className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-display font-semibold">Admin Access</h1>
          <p className="text-ink/60 mt-2 text-sm">Sign in to view submissions.</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-600 rounded-xl text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-ink/60 mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="w-full bg-transparent border border-line-soft rounded-xl p-3 text-sm focus:outline-none focus:border-brand transition-colors text-ink placeholder-ink/30"
              placeholder="admin"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-ink/60 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full bg-transparent border border-line-soft rounded-xl p-3 text-sm focus:outline-none focus:border-brand transition-colors text-ink placeholder-ink/30"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-brand text-brand-foreground px-6 py-4 rounded-xl font-semibold shadow-lg shadow-brand/20 transition-transform hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Authenticate'}
            {!loading && <ArrowRight className="w-5 h-5" />}
          </button>
        </form>
      </div>
    </div>
  );
}

function AdminDashboard({ session, onLogout }: { session: any, onLogout: () => void }) {
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSubmissions() {
      try {
        const { data, error } = await supabase
          .from('contact_submissions')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (error) throw error;
        setSubmissions(data || []);
      } catch (err) {
        console.error('Failed to fetch submissions', err);
      } finally {
        setLoading(false);
      }
    }
    fetchSubmissions();
  }, []);

  return (
    <div className="min-h-screen bg-paper text-ink font-sans">
      <header className="bg-white border-b border-line-soft px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <Database className="w-6 h-6 text-brand" />
          <h1 className="text-xl font-display font-semibold">Exoclust Control</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-sm font-mono text-ink/50 uppercase">
            User: <span className="text-ink font-bold">{session.username}</span>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center gap-2 text-sm text-ink/70 hover:text-red-500 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 md:p-12">
        <div className="mb-8">
          <h2 className="text-3xl font-display font-semibold mb-2">Contact Submissions</h2>
          <p className="text-ink/60">View inquiries submitted via the public website.</p>
        </div>

        <div className="bg-white border border-line-soft rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-paper border-b border-line-soft text-ink/70 font-mono text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4 font-medium">Date</th>
                  <th className="px-6 py-4 font-medium">Name</th>
                  <th className="px-6 py-4 font-medium">Email</th>
                  <th className="px-6 py-4 font-medium">Phone</th>
                  <th className="px-6 py-4 font-medium">Project Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line-soft">
                {loading ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-ink/50">
                      <Loader2 className="w-6 h-6 animate-spin mx-auto mb-2" />
                      Loading submissions...
                    </td>
                  </tr>
                ) : submissions.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-ink/50">
                      No submissions found.
                    </td>
                  </tr>
                ) : (
                  submissions.map((sub: any) => (
                    <tr key={sub.id} className="hover:bg-paper/50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-ink/60">
                        {new Date(sub.created_at).toLocaleDateString()} <br/>
                        <span className="text-xs">{new Date(sub.created_at).toLocaleTimeString()}</span>
                      </td>
                      <td className="px-6 py-4 font-medium">
                        {sub.first_name} {sub.last_name}
                      </td>
                      <td className="px-6 py-4 text-brand">
                        <a href={`mailto:${sub.email}`}>{sub.email}</a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-ink/80">
                        {sub.phone ? <a href={`tel:${sub.phone}`} className="hover:text-brand transition-colors">{sub.phone}</a> : <span className="text-ink/30 italic">N/A</span>}
                      </td>
                      <td className="px-6 py-4 max-w-md">
                        <p className="line-clamp-3 text-ink/80" title={sub.project_details}>
                          {sub.project_details || <span className="text-ink/30 italic">No details provided</span>}
                        </p>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
