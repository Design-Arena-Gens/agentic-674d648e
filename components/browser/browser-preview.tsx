'use client';

import { useMemo, useState } from 'react';
import { AnimatedCounter } from '../ui/animated-counter';

type Tab = {
  id: string;
  title: string;
  url: string;
  vibe: string;
  description: string;
  accent: string;
};

const TABS: Tab[] = [
  {
    id: 'nebula',
    title: 'Nebula Flow',
    url: 'nebula.research',
    vibe: 'bg-gradient-to-br from-orange-500/20 via-cyan-500/10 to-transparent',
    description: 'AI-compounded research with zero ads and live citations.',
    accent: 'text-orange-300'
  },
  {
    id: 'canvas',
    title: 'Canvas Live',
    url: 'canvas.studio',
    vibe: 'bg-gradient-to-br from-cyan-500/20 via-emerald-500/10 to-transparent',
    description: 'Collaborative design canvas with instant share links.',
    accent: 'text-cyan-300'
  },
  {
    id: 'market',
    title: 'Market Pulse',
    url: 'pulse.markets',
    vibe: 'bg-gradient-to-br from-amber-500/20 via-rose-500/10 to-transparent',
    description: 'Focused trading terminal with latency-scrubbed feeds.',
    accent: 'text-amber-300'
  }
];

export function BrowserPreview() {
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  const [shieldsUp, setShieldsUp] = useState(true);
  const [trackerGuard, setTrackerGuard] = useState(true);
  const [quantaAI, setQuantaAI] = useState(true);

  const blockedAds = useMemo(() => (shieldsUp ? 24867 : 867), [shieldsUp]);
  const trackers = useMemo(() => (trackerGuard ? 9124 : 234), [trackerGuard]);

  return (
    <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-4 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.9)] backdrop-blur-xl md:p-6">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <span className="ml-3 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/60">
              IBS Cloud Session
            </span>
          </div>
          <button className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 transition hover:bg-white/10 md:inline-flex">
            Launch workspace
          </button>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <div className="flex flex-1 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <span className="px-2 text-xs uppercase tracking-[0.25em] text-white/40">Secure</span>
            <input
              className="flex-1 bg-transparent text-sm text-white/90 placeholder:text-white/40 focus:outline-none"
              placeholder="search or enter destination — try autonomous co-browsing"
              defaultValue={activeTab.url}
            />
          </div>
          <div className="flex items-center justify-end gap-2 text-xs text-white/60 md:flex-col md:text-[11px]">
            <div className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> live
            </div>
            <div className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-cyan-400" /> synced
            </div>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/40">
            <div
              className={`relative flex flex-col gap-4 p-6 transition-all duration-300 ${activeTab.vibe}`}
            >
              <header className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/40">
                  <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] text-emerald-200">tab</span>
                  {activeTab.url}
                </div>
                <h3 className="text-2xl font-semibold text-white/90">{activeTab.title}</h3>
                <p className="text-sm text-white/60">{activeTab.description}</p>
              </header>

              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-xl border border-white/5 bg-white/5 p-3">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-white/40">Focus loop</div>
                  <p className="mt-1 text-sm text-white/70">
                    Autonomous summaries, co-reading, and distraction purging keep momentum high.
                  </p>
                </div>
                <div className="rounded-xl border border-white/5 bg-white/5 p-3">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-white/40">Ad shields</div>
                  <p className="mt-1 text-sm text-white/70">
                    Brave-grade blocking rewritten for the cloud with per-pixel filtration.
                  </p>
                </div>
              </div>

              <dl className="grid grid-cols-2 gap-4 rounded-xl border border-white/5 bg-white/5 p-4 text-sm text-white/70">
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.35em] text-white/40">Ads blocked</dt>
                  <dd className="mt-1 text-2xl font-semibold text-white">
                    <AnimatedCounter value={blockedAds} />
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.35em] text-white/40">Trackers neutralized</dt>
                  <dd className="mt-1 text-2xl font-semibold text-white">
                    <AnimatedCounter value={trackers} />
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <aside className="flex flex-col gap-3">
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <h4 className="text-sm font-semibold text-white/80">Session controls</h4>
              <div className="mt-3 flex flex-col gap-2 text-sm">
                <button
                  onClick={() => setShieldsUp((prev) => !prev)}
                  className={`flex items-center justify-between rounded-xl border border-white/10 px-4 py-2 transition ${
                    shieldsUp ? 'bg-emerald-500/15 text-emerald-200' : 'bg-white/5 text-white/70'
                  }`}
                >
                  <span>Shields up</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-white/60">
                    {shieldsUp ? 'active' : 'idle'}
                  </span>
                </button>
                <button
                  onClick={() => setTrackerGuard((prev) => !prev)}
                  className={`flex items-center justify-between rounded-xl border border-white/10 px-4 py-2 transition ${
                    trackerGuard ? 'bg-cyan-500/15 text-cyan-200' : 'bg-white/5 text-white/70'
                  }`}
                >
                  <span>Tracker guard</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-white/60">
                    {trackerGuard ? 'locked' : 'relaxed'}
                  </span>
                </button>
                <button
                  onClick={() => setQuantaAI((prev) => !prev)}
                  className={`flex items-center justify-between rounded-xl border border-white/10 px-4 py-2 transition ${
                    quantaAI ? 'bg-orange-500/15 text-orange-200' : 'bg-white/5 text-white/70'
                  }`}
                >
                  <span>Quanta co-pilot</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-white/60">
                    {quantaAI ? 'augment' : 'off'}
                  </span>
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.35em] text-white/40">Tab orbit</span>
                <span className="text-[11px] uppercase tracking-[0.35em] text-white/40">{TABS.length} open</span>
              </div>
              <div className="mt-3 flex flex-col gap-2">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab)}
                    className={`flex items-center justify-between rounded-xl border px-4 py-2 text-left text-sm transition ${
                      activeTab.id === tab.id
                        ? 'border-white/30 bg-white/15 text-white shadow-glow'
                        : 'border-white/5 bg-white/5 text-white/60 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] text-white/40">{tab.url}</div>
                      <div className="font-medium text-white/80">{tab.title}</div>
                    </div>
                    <span className={`text-xs font-semibold ${tab.accent}`}>Focus</span>
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
