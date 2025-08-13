import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="https://www.sagespumphousekorba.com/img/preloader.png" alt="Sages Library Logo" width={32} height={32} className="h-8 w-8" />
          <span className="font-bold font-headline">
            Sages Library, Pump House, Korba
          </span>
        </Link>
        <div className="flex items-center gap-4">
           <Button variant="ghost" className="hidden md:inline-flex">About</Button>
           <Button variant="outline">Contact Us</Button>
        </div>
      </div>
    </header>
  );
}
