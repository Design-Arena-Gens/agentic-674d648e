import { AnimatedCounter } from '../ui/animated-counter';

const stats = [
  {
    label: 'Elements neutralized',
    value: 128004,
    tagline: 'Ads stripped in the last 24h across cloud sessions.'
  },
  {
    label: 'Trackers silenced',
    value: 43190,
    tagline: 'Cross-site scripts blocked at the edge before render.'
  },
  {
    label: 'Latency shaved',
    value: 37,
    tagline: 'Average ms recovered via shielded delivery per page.'
  }
];

export function StatRow() {
  return (
    <section className="grid gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
          <div className="text-[11px] uppercase tracking-[0.4em] text-white/40">{stat.label}</div>
          <div className="mt-3 text-3xl font-semibold text-white">
            <AnimatedCounter value={stat.value} />
            {stat.label === 'Latency shaved' && <span className="ml-1 text-lg text-white/60">ms</span>}
          </div>
          <p className="mt-2 text-sm text-white/60">{stat.tagline}</p>
        </div>
      ))}
    </section>
  );
}
