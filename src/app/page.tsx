import { Header } from '@/components/layout/header';
import { Hero } from '@/components/landing/hero';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
      </main>
    </div>
  );
}
