import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export const dynamic = 'force-dynamic'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getClaims()

  if (error || !data?.claims) redirect('/login')

  const email = typeof data.claims.email === 'string' ? data.claims.email : 'Member'
  const metadataName = data.claims.user_metadata?.full_name
  const name = typeof metadataName === 'string' ? metadataName : email

  return (
    <main className="dashboard-shell">
      <header className="dashboard-header">
        <div className="brand"><span className="brand-mark small-mark">♛</span><span>CROWN <small>PROPERTIES</small></span></div>
        <form action="/auth/signout" method="post"><button className="outline-button">Sign out</button></form>
      </header>
      <section className="welcome-panel">
        <p className="eyebrow">MEMBER PORTAL</p>
        <h1>Welcome, {name}</h1>
        <p className="muted">{email}</p>
        <div className="status-chip">Authenticated session verified</div>
      </section>
      <section className="dashboard-grid">
        <article className="info-card"><span>WALLET</span><h2>Cash + Points</h2><p>Wallet balances will appear here after the ledger is connected.</p></article>
        <article className="info-card"><span>MEMBERSHIP</span><h2>5 Levels</h2><p>FREE · BRONZE · SILVER · GOLD · PLATINUM</p></article>
        <article className="info-card"><span>TASK SYSTEM</span><h2>Mixed genuine tasks</h2><p>Task assignments and reviews will be connected in the next phase.</p></article>
      </section>
      <p className="footnote">Secure foundation is active. No demo balance, payment or task reward is shown as real.</p>
    </main>
  )
}
