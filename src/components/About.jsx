const STATS = [
  { value: '10+', label: 'Years in production engineering' },
  { value: '7', label: 'Teams & companies shipped with' },
  { value: '3', label: 'Design systems led end to end' },
]

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <div className="about-copy">
          <p className="eyebrow">About</p>
          <h2 className="section-title">
            Frontend-rooted, full-stack in practice, comfortable owning the whole pipeline.
          </h2>
          <p className="about-p">
            I've spent the last decade designing, building, and delivering web applications
            from concept to production — most often as the engineer who owns frontend
            architecture, but just as often the one wiring up the API, the auth, or the
            deployment pipeline underneath it. I care about systems that are still easy to
            reason about after five other engineers have touched them.
          </p>
          <p className="about-p">
            Recently that's meant leading component libraries and design-system standards
            across teams, migrating legacy stacks to modern React/TypeScript, and improving
            Core Web Vitals at scale. Earlier in my career, it meant building the tools
            underneath — a live GraphQL schema visualizer, service-oriented backends, and
            CI/CD pipelines that let teams ship with confidence.
          </p>
        </div>

        <div className="about-stats">
          {STATS.map((s) => (
            <div key={s.label} className="stat-card">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
