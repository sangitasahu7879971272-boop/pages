import { Header } from '@/components/layout/header';
import { Hero } from '@/components/landing/hero';
import { Contact } from '@/components/landing/contact';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
