import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative flex flex-col gap-8">
      <div className="absolute -inset-16 -z-10 hidden rounded-full bg-gradient-to-r from-orange-500/30 via-cyan-500/30 to-transparent opacity-70 blur-3xl md:block" />
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-white/50">
        <span className="rounded-full bg-white/10 px-3 py-1">IBS</span>
        Cloud-native browser for fearless workflows
      </div>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl space-y-4">
          <h1 className="text-4xl font-semibold leading-tight text-white/90 sm:text-5xl md:text-6xl">
            Bold, adless browsing crafted for mobile-first momentum.
          </h1>
          <p className="text-base text-white/70 sm:text-lg md:max-w-2xl">
            IBS synchronizes every tab in the cloud, weaponizes Brave-grade blocking, and watches your
            workflows with AI copilots that cut noise to zero.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2 text-xs">
          <Link
            href="#launch"
            className="rounded-full bg-white px-6 py-2 font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            Launch in browser
          </Link>
          <Link
            href="#explore"
            className="rounded-full border border-white/20 px-6 py-2 font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
          >
            View roadmap
          </Link>
        </div>
      </div>
    </section>
  );
}
