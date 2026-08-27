import { projects, projectCategories } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'

export default function Projects() {
  let runningIndex = 0

  return (
    <section id="work" className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Selected work</p>
          <h2 className="section-title">Nine builds in progress, three disciplines.</h2>
          <p className="section-sub">
            Staff-level system designs currently in development — three each in frontend,
            full-stack/backend, and infrastructure/cloud. Each is scoped to a problem I've
            solved before in production, sized up to staff-level ownership.
          </p>
        </div>

        {projectCategories.map((cat) => {
          const items = projects.filter((p) => p.category === cat)
          return (
            <div className="project-category-group" key={cat}>
              <h3 className="project-category-heading">{cat}</h3>
              <div className="project-grid">
                {items.map((p) => {
                  const cardIndex = runningIndex
                  runningIndex += 1
                  return <ProjectCard key={p.id} project={p} index={cardIndex} />
                })}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
