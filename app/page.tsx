import { BrowserPreview } from '@/components/browser/browser-preview';
import { DesktopArena } from '@/components/sections/desktop-arena';
import { Footer } from '@/components/sections/footer';
import { Hero } from '@/components/sections/hero';
import { MobileFirstShowcase } from '@/components/sections/mobile-first';
import { StatRow } from '@/components/sections/stat-row';

export default function Page() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-12 px-5 py-12 sm:py-16">
      <Hero />
      <StatRow />
      <BrowserPreview />
      <MobileFirstShowcase />
      <DesktopArena />
      <Footer />
    </main>
  );
}
