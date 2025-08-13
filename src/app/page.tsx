import { Header } from '@/components/layout/header';
import { Hero } from '@/components/landing/hero';
import { About } from '@/components/landing/about';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
      </main>
    </div>
  );
}
