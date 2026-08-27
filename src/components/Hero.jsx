import NodeGraph from './NodeGraph.jsx'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <NodeGraph />
      <div className="hero-scrim" />
      <div className="container hero-inner">
        <p className="eyebrow">Senior Software Engineer · Las Vegas, NV (Remote)</p>
        <h1 className="hero-title">
          I build the systems <span className="text-amber">and</span> the interfaces
          <br />
          that sit on top of them.
        </h1>
        <p className="hero-sub">
          10+ years shipping production web applications end to end — React and TypeScript on
          the front, Node.js and cloud infrastructure underneath. I've led design systems used
          by multiple teams, rebuilt legacy platforms into scalable microservices, and built
          real-time developer tooling from scratch.
        </p>
        <div className="hero-actions">
          <a href="#work" className="btn btn-primary">
            View selected work
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in touch
          </a>
        </div>
        <div className="hero-stack">
          <span className="hero-stack-label">Core stack</span>
          <span>React</span>
          <span>TypeScript</span>
          <span>Node.js</span>
          <span>GraphQL</span>
          <span>AWS</span>
        </div>
      </div>
    </section>
  )
}
