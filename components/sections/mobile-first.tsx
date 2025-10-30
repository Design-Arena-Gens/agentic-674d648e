export function MobileFirstShowcase() {
  const features = [
    {
      label: 'Thumb-arc controls',
      description: 'Docked navigation, tab flux, and shields optimized for one-handed flow.',
      metric: '0.18s action reach'
    },
    {
      label: 'Adaptive reader',
      description: 'Rewrites clutter into focus-ready cards that adapt to your context.',
      metric: '5x faster skim'
    },
    {
      label: 'Offline ghosts',
      description: 'Pre-cached journeys keep your queue alive even when signal drops.',
      metric: '12h continuity'
    }
  ];

  return (
    <section id="launch" className="flex flex-col gap-6">
      <header className="space-y-2">
        <h2 className="text-2xl font-semibold text-white/90 sm:text-3xl">Tailored for mobile initiation</h2>
        <p className="text-sm text-white/60 sm:text-base">
          IBS launches as a cloud stream tuned for fingertips. The interface adapts to your grip, suppresses friction, and silently barricades ads and trackers.
        </p>
      </header>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.label}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-white/30 hover:bg-white/10"
          >
            <span className="text-[11px] uppercase tracking-[0.35em] text-white/40">Mobile</span>
            <h3 className="mt-2 text-lg font-semibold text-white/80">{feature.label}</h3>
            <p className="mt-2 text-sm text-white/60">{feature.description}</p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> {feature.metric}
            </div>
            <div className="absolute inset-0 -z-10 scale-110 bg-gradient-to-br from-orange-500/0 via-orange-500/10 to-transparent opacity-0 transition group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </section>
  );
}
