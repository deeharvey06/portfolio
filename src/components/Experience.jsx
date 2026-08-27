import { experience } from '../data/experience.js'

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Experience</p>
          <h2 className="section-title">A decade of shipping, in order.</h2>
        </div>

        <ol className="timeline">
          {experience.map((job) => (
            <li key={`${job.company}-${job.period}`} className="timeline-item">
              <div className="timeline-period">{job.period}</div>
              <div className="timeline-content">
                <h3 className="timeline-role">
                  {job.role} <span className="timeline-company">— {job.company}</span>
                </h3>
                <p className="timeline-location">{job.location}</p>
                <p className="timeline-summary">{job.summary}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
