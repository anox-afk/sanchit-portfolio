import React from 'react';

const jobs = [
  {
    date: 'Apr 2026 – Present',
    title: 'Executive – Digital Marketing',
    company: 'Rama Hospital & Research Centre · Noida, UP',
    points: [
      'Spearhead digital marketing strategy across social and paid media channels.',
      'Create and oversee all content production — video, photography, and copy.',
      'Manage Meta Ads campaigns with a consistent focus on CTR and engagement growth.',
      'Collaborate with the brand team to maintain a consistent visual language.',
    ],
  },
  {
    date: 'Jun 2023 – Mar 2026',
    title: 'Videographer & Content Creator',
    company: 'Freelance · Delhi NCR',
    points: [
      'Delivered end-to-end video production for fashion, corporate, and product clients.',
      'Shot and edited over 50 commercial campaigns — brand films, reels, and ad spots.',
      'Handled colour grading and audio post-production independently.',
      'Managed client briefs, on-set direction, and final deliverables.',
    ],
  },
];

const Experience = () => {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-tag">
          <span className="section-tag-text">03 / Experience</span>
          <div className="section-tag-line" />
        </div>

        <h2 className="section-title">Work<br /><span className="accent">History.</span></h2>

        <div className="exp-list">
          {jobs.map((job, i) => (
            <div key={i} className="exp-row">
              <div className="exp-date">{job.date}</div>
              <div className="exp-body">
                <h3>{job.title}</h3>
                <p className="exp-company">{job.company}</p>
                <ul>
                  {job.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
