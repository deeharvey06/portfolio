import { skillGroups } from '../data/skills.js'

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Stack</p>
          <h2 className="section-title">Tools I reach for.</h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.label} className="skills-group">
              <h3 className="skills-group-label">{group.label}</h3>
              <ul className="skills-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
