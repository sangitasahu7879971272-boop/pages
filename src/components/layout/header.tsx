import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <BookOpen className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline">
            Sages Library
          </span>
        </Link>
        <div className="flex items-center gap-4">
           <Button variant="ghost" className="hidden md:inline-flex">About</Button>
           <Button variant="ghost" className="hidden md:inline-flex">Events</Button>
           <Button variant="outline">Contact Us</Button>
        </div>
      </div>
    </header>
  );
}
