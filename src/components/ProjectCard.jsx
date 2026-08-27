export default function ProjectCard({ project, index }) {
  return (
    <article className={`project-card ${project.flagship ? 'project-card-flagship' : ''}`}>
      <div className="project-head">
        <div>
          <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
          <h3 className="project-name">{project.name}</h3>
        </div>
        <span className="tag tag-planned">Planned build</span>
      </div>

      <div className="project-body">
        <div className="project-block">
          <span className="project-block-label">The problem</span>
          <p>{project.problem}</p>
        </div>
        <div className="project-block">
          <span className="project-block-label">The approach</span>
          <p>{project.approach}</p>
        </div>
        <div className="project-block">
          <span className="project-block-label">Why it matters</span>
          <p>{project.impact}</p>
        </div>
      </div>

      <div className="project-tags">
        {project.tags.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
    </article>
  )
}
