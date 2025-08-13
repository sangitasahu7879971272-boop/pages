import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 min-h-[80vh] md:min-h-[70vh] items-center">
          <div className="space-y-4 text-center md:text-left">
            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground animate-fade-in-down">
              Sages Library
            </h1>
            <p className="font-body text-lg md:text-xl max-w-md mx-auto md:mx-0 text-muted-foreground animate-fade-in-up">
              Your Gateway to Knowledge in Korba
            </p>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
              <Button size="lg" className="mt-4">Explore Collection</Button>
            </div>
          </div>
          <div className="relative w-full h-[50vh] md:h-full animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
            <div className="absolute top-0 left-0 w-2/3 h-2/3">
               <Image
                src="https://www.sagespumphousekorba.com/admin/uploads/lab/PHOTO-2021-02-21-18-47-12.jpg"
                alt="Sages School Building"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
                data-ai-hint="school building"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2">
               <Image
                src="https://www.sagespumphousekorba.logixcard.com/admin/uploads/lab/LIBRARY.jpg"
                alt="Bookshelves"
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-background"
                data-ai-hint="library interior"
              />
            </div>
            <div className="absolute top-1/4 right-0 w-1/3 h-1/3 transform -translate-y-1/4">
               <Image
                src="https://www.sagespumphousekorba.logixcard.com/admin/uploads/lab/IMG-20210220-WA0022.jpg"
                alt="Reading Area"
                width={300}
                height={300}
                className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-background"
                data-ai-hint="library reading area"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
