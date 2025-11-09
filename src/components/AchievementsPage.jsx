import React from 'react';
import { Calendar, Award, Newspaper, Trophy } from 'lucide-react';

const timeline = [
  {
    year: '2025',
    items: [
      { title: 'Shortlisted for Disrupt’25', icon: <Trophy className="text-blue-600" size={18} />, logo: null },
    ],
  },
  {
    year: '2024',
    items: [
      { title: 'Winner - Futurepreneur Challenge', icon: <Award className="text-teal-600" size={18} />, logo: null },
      { title: 'IIT Guwahati & IIT Delhi TechFest Finalist', icon: <Trophy className="text-blue-600" size={18} />, logo: null },
      { title: 'Funding term sheet ₹50L @ ₹8Cr valuation', icon: <Newspaper className="text-teal-600" size={18} />, logo: null },
      { title: 'Incubation talks with SINE-IITB & E-Cell IITM (final stage)', icon: <Newspaper className="text-blue-600" size={18} />, logo: null },
      { title: 'Incubated by Gece Global Foundation', icon: <Award className="text-teal-600" size={18} />, logo: null },
    ],
  },
];

export default function AchievementsPage() {
  const [activeYear, setActiveYear] = React.useState(timeline[0].year);

  const active = timeline.find((t) => t.year === activeYear);

  return (
    <section id="media" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-900">Achievements & Media</h2>
            <p className="mt-2 text-zinc-600">Browse our milestones by year and explore media mentions.</p>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-white p-1 shadow-sm">
            {timeline.map((t) => (
              <button
                key={t.year}
                onClick={() => setActiveYear(t.year)}
                className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                  activeYear === t.year ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white' : 'text-zinc-700 hover:bg-zinc-50'
                }`}
                aria-pressed={activeYear === t.year}
              >
                <span className="inline-flex items-center gap-2"><Calendar size={16} /> {t.year}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {active?.items.map((it, idx) => (
            <article key={idx} className="group rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center">
                  {it.icon}
                </div>
                <div>
                  <h3 className="font-medium text-zinc-900">{it.title}</h3>
                  <p className="mt-1 text-sm text-zinc-600">Press kit and logos available on request.</p>
                </div>
              </div>
              {it.logo && (
                <div className="mt-4">
                  <img src={it.logo} alt="Logo" className="h-10 w-auto" />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
