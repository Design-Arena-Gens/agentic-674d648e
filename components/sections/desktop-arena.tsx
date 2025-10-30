export function DesktopArena() {
  const flows = [
    {
      title: 'Command fabric',
      description: 'Summon every action, workspace, and teammate in <250ms with a quick command.',
      highlights: ['Cross-tab jumps', 'Linked automations', 'Voice-ready']
    },
    {
      title: 'Split horizon',
      description: 'Multi-column grid that composes research, docs, and calls with zero overlap.',
      highlights: ['Magnetic panes', 'Latency smoothing', 'Adaptive focus']
    },
    {
      title: 'Signal theatre',
      description: 'Real-time privacy overlays visualize what IBS blocked in your current space.',
      highlights: ['Ad heatmaps', 'Tracker trails', 'Threat playback']
    }
  ];

  return (
    <section className="flex flex-col gap-6 bg-white/3 p-6 sm:rounded-3xl sm:border sm:border-white/10 sm:bg-white/[0.04]" id="explore">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-white/90 sm:text-3xl">Desktop arena, engineered differently</h2>
          <p className="text-sm text-white/60 sm:text-base">
            Switch to widescreen and IBS mutates. Layouts fan out, automation surfaces and your ad-block telemetry pulses in real time.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/50">
          <span className="h-2 w-2 rounded-full bg-orange-400" /> Desktop experience
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {flows.map((flow) => (
          <article key={flow.title} className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-5">
            <header>
              <h3 className="text-lg font-semibold text-white/80">{flow.title}</h3>
              <p className="mt-1 text-sm text-white/60">{flow.description}</p>
            </header>
            <ul className="mt-auto flex flex-wrap gap-2 text-xs text-white/60">
              {flow.highlights.map((highlight) => (
                <li key={highlight} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  {highlight}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
