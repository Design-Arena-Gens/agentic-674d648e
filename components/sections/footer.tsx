export function Footer() {
  return (
    <footer className="mt-12 flex flex-col gap-4 border-t border-white/5 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-2">
        <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.35em]">IBS</span>
        <span>Cloud-native browser built for velocity.</span>
      </div>
      <div className="flex flex-wrap gap-3">
        <a href="#" className="transition hover:text-white">
          Privacy brief
        </a>
        <a href="#" className="transition hover:text-white">
          Release channel
        </a>
        <a href="#" className="transition hover:text-white">
          Support
        </a>
      </div>
    </footer>
  );
}
