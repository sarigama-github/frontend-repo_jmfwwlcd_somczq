import { useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Spline from '@splinetool/react-spline'

const NeonButton = ({ children, to }) => (
  <Link
    to={to}
    className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900/70 border border-cyan-500/30 text-cyan-200 hover:text-white shadow-[0_0_20px_rgba(34,211,238,0.25)] hover:shadow-[0_0_35px_rgba(34,211,238,0.45)] transition-all duration-300 group"
  >
    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    <span className="relative">{children}</span>
  </Link>
)

const PageShell = ({ title, subtitle, children }) => (
  <div className="min-h-screen bg-slate-950 text-slate-100">
    <header className="sticky top-0 z-40 backdrop-blur bg-slate-950/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 shadow-[0_0_25px_rgba(16,185,129,0.6)]" />
          <span className="text-xl font-black tracking-tight">botbuy</span>
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          {[
            ['Shop','/shop'],['About','/about'],['Pricing','/pricing'],['Docs','/docs'],['Blog','/blog'],['Contact','/contact']
          ].map(([lbl, href]) => (
            <Link key={href} to={href} className="px-4 py-2 text-sm text-slate-300 hover:text-white/90 transition-colors">{lbl}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <NeonButton to="/login">Log in</NeonButton>
          <NeonButton to="/signup">Sign up</NeonButton>
        </div>
      </div>
    </header>

    {title && (
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.1),transparent_40%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 py-14">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">{title}</h1>
          {subtitle && <p className="text-slate-300 text-lg max-w-3xl">{subtitle}</p>}
        </div>
      </section>
    )}

    <main className="max-w-7xl mx-auto px-6 py-10">
      {children}
    </main>

    <footer className="border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-slate-400 flex flex-col md:flex-row gap-4 justify-between">
        <p>© {new Date().getFullYear()} botbuy. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="/privacy" className="hover:text-white/80">Privacy</Link>
          <Link to="/terms" className="hover:text-white/80">Terms</Link>
          <Link to="/status" className="hover:text-white/80">Status</Link>
        </div>
      </div>
    </footer>
  </div>
)

const Hero = () => {
  useEffect(() => {
    document.body.classList.add('overflow-x-hidden')
    return () => document.body.classList.remove('overflow-x-hidden')
  }, [])
  return (
    <section className="relative h-[80vh] min-h-[560px] w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_10%_10%,rgba(16,185,129,0.12),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(59,130,246,0.10),transparent_45%)]" />

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/OG17yM2eUIs8MUmA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-400/40 text-emerald-200 bg-emerald-500/10 mb-5">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Live automation bots, ready to deploy
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
            Buy, deploy and manage bots in neon style
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-xl">
            Powerful automation for trading, scraping, moderation and more. One marketplace, instant delivery, client dashboards and secure payments.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <NeonButton to="/shop">Explore shop</NeonButton>
            <NeonButton to="/dashboard">Client dashboard</NeonButton>
          </div>
        </div>
      </div>
    </section>
  )
}

// Simple placeholder sections for 10+ pages
const Placeholder = ({ title, copy }) => (
  <PageShell title={title} subtitle={copy}>
    <div className="grid md:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 shadow-[0_0_20px_rgba(34,211,238,0.12)]">
          <div className="h-36 rounded-lg bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-white/10 mb-4" />
          <p className="text-slate-300">Neon-ready component block</p>
        </div>
      ))}
    </div>
  </PageShell>
)

const Shop = () => (
  <PageShell title="Shop" subtitle="Browse bots by category, rating and use-case.">
    <div className="grid md:grid-cols-3 gap-6">
      {[1,2,3,4,5,6,7,8,9].map((id) => (
        <div key={id} className="p-6 rounded-2xl bg-slate-900/60 border border-white/10">
          <div className="h-40 rounded-lg bg-gradient-to-br from-emerald-500/15 to-cyan-500/15 border border-white/10 mb-4" />
          <h3 className="text-lg font-semibold">Automation Bot #{id}</h3>
          <p className="text-slate-400 text-sm mt-1">High-performance, easy setup, instant license.</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-emerald-300 font-bold">$49</span>
            <NeonButton to="/checkout">Buy</NeonButton>
          </div>
        </div>
      ))}
    </div>
  </PageShell>
)

const Dashboard = () => (
  <PageShell title="Client dashboard" subtitle="Manage licenses, deploy keys and usage analytics.">
    <div className="grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2 p-6 rounded-2xl bg-slate-900/60 border border-white/10">
        <h3 className="font-semibold mb-2">Your bots</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {[1,2,3].map(i => (
            <div key={i} className="p-4 rounded-xl bg-slate-900/70 border border-white/10">
              <div className="flex items-center justify-between">
                <p className="text-slate-300">Bot {i}</p>
                <span className="text-emerald-400 text-sm">Active</span>
              </div>
              <div className="mt-3 flex gap-2">
                <NeonButton to="#">Deploy</NeonButton>
                <NeonButton to="#">Keys</NeonButton>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10">
        <h3 className="font-semibold mb-2">Usage</h3>
        <div className="h-36 rounded-lg bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-white/10" />
      </div>
    </div>
  </PageShell>
)

const OwnerDashboard = () => (
  <PageShell title="Owner dashboard" subtitle="Revenue, orders, product controls and customer tickets.">
    <div className="grid md:grid-cols-4 gap-6">
      {[['Revenue','$18,420'],['Orders','329'],['Conversion','4.7%'],['Refunds','2']].map(([k,v]) => (
        <div key={k} className="p-6 rounded-2xl bg-slate-900/60 border border-white/10">
          <p className="text-slate-400 text-sm">{k}</p>
          <p className="text-2xl font-bold mt-1">{v}</p>
        </div>
      ))}
      <div className="md:col-span-2 p-6 rounded-2xl bg-slate-900/60 border border-white/10">
        <h3 className="font-semibold mb-2">Recent orders</h3>
        <div className="space-y-3">
          {[1,2,3,4].map(i => (
            <div key={i} className="p-4 rounded-xl bg-slate-900/70 border border-white/10 flex items-center justify-between">
              <p className="text-slate-300">Order #{1000+i}</p>
              <span className="text-emerald-400 text-sm">Paid</span>
            </div>
          ))}
        </div>
      </div>
      <div className="md:col-span-2 p-6 rounded-2xl bg-slate-900/60 border border-white/10">
        <h3 className="font-semibold mb-2">Products</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {[1,2,3,4].map(i => (
            <div key={i} className="p-3 rounded-xl bg-slate-900/70 border border-white/10">
              <p className="">Automation Bot {i}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </PageShell>
)

const Auth = ({ mode }) => (
  <PageShell title={mode === 'login' ? 'Welcome back' : 'Create your account'} subtitle="Use Google or Discord, loaded from your local env keys.">
    <div className="grid md:grid-cols-2 gap-6">
      <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10">
        <p className="text-slate-300">Quick auth</p>
        <div className="mt-4 grid gap-3">
          <a href="#" className="px-4 py-3 rounded-xl bg-slate-900/70 border border-white/10 hover:border-emerald-400/50 transition">
            Sign in with Google (client id from .env.local)
          </a>
          <a href="#" className="px-4 py-3 rounded-xl bg-slate-900/70 border border-white/10 hover:border-cyan-400/50 transition">
            Sign in with Discord (client id from .env.local)
          </a>
        </div>
      </div>
      <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10">
        <p className="text-slate-300">Or continue with email</p>
        <form className="mt-4 grid gap-3">
          <input placeholder="Email" className="px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 outline-none focus:border-emerald-400/50" />
          <input type="password" placeholder="Password" className="px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 outline-none focus:border-cyan-400/50" />
          <button className="px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-bold">Continue</button>
        </form>
      </div>
    </div>
  </PageShell>
)

const Checkout = () => (
  <PageShell title="Checkout" subtitle="Pay securely via PayPal. Keys loaded from .env.local on backend.">
    <div className="grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2 p-6 rounded-2xl bg-slate-900/60 border border-white/10">
        <h3 className="font-semibold mb-2">Order summary</h3>
        <div className="space-y-3">
          {[1,2].map(i => (
            <div key={i} className="p-4 rounded-xl bg-slate-900/70 border border-white/10 flex items-center justify-between">
              <p className="text-slate-300">Automation Bot {i}</p>
              <span className="text-emerald-400 text-sm">$49</span>
            </div>
          ))}
        </div>
      </div>
      <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10">
        <h3 className="font-semibold">Payment</h3>
        <p className="text-slate-400 text-sm">This demo creates a server-side PayPal order using your keys.</p>
        <NeonButton to="/success" >Pay with PayPal</NeonButton>
      </div>
    </div>
  </PageShell>
)

const Home = () => (
  <div className="min-h-screen bg-slate-950 text-slate-100">
    <header className="sticky top-0 z-40 backdrop-blur bg-slate-950/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 shadow-[0_0_25px_rgba(16,185,129,0.6)]" />
          <span className="text-xl font-black tracking-tight">botbuy</span>
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          {[
            ['Shop','/shop'],['About','/about'],['Pricing','/pricing'],['Docs','/docs'],['Blog','/blog'],['Contact','/contact']
          ].map(([lbl, href]) => (
            <Link key={href} to={href} className="px-4 py-2 text-sm text-slate-300 hover:text-white/90 transition-colors">{lbl}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <NeonButton to="/login">Log in</NeonButton>
          <NeonButton to="/signup">Sign up</NeonButton>
        </div>
      </div>
    </header>

    <Hero />

    <main className="max-w-7xl mx-auto px-6 py-16">
      <section className="grid md:grid-cols-3 gap-6">
        {["Instant delivery","License dashboard","24/7 uptime"].map((h, i) => (
          <div key={i} className="p-6 rounded-2xl bg-slate-900/60 border border-white/10">
            <h3 className="font-semibold">{h}</h3>
            <p className="text-slate-400 text-sm mt-2">Beautiful neon-themed experience with secure infrastructure.</p>
          </div>
        ))}
      </section>
    </main>

    <footer className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-slate-400 flex flex-col md:flex-row gap-4 justify-between">
        <p>© {new Date().getFullYear()} botbuy. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="/privacy" className="hover:text-white/80">Privacy</Link>
          <Link to="/terms" className="hover:text-white/80">Terms</Link>
          <Link to="/status" className="hover:text-white/80">Status</Link>
        </div>
      </div>
    </footer>
  </div>
)

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/owner" element={<OwnerDashboard />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Auth mode="login" />} />
      <Route path="/signup" element={<Auth mode="signup" />} />
      <Route path="/about" element={<Placeholder title="About us" copy="Crafting next‑gen automation with care." />} />
      <Route path="/pricing" element={<Placeholder title="Pricing" copy="Simple plans for teams and pros." />} />
      <Route path="/docs" element={<Placeholder title="Docs" copy="Guides, API and SDK." />} />
      <Route path="/blog" element={<Placeholder title="Blog" copy="Updates from the bot frontier." />} />
      <Route path="/contact" element={<Placeholder title="Contact" copy="We’re here to help 24/7." />} />
      <Route path="/privacy" element={<Placeholder title="Privacy" copy="Your data, your rules." />} />
      <Route path="/terms" element={<Placeholder title="Terms" copy="The legal stuff, made simple." />} />
      <Route path="/status" element={<Placeholder title="Status" copy="Systems all green." />} />
      <Route path="*" element={<Placeholder title="Not found" copy="The page you’re looking for doesn’t exist." />} />
    </Routes>
  )
}
