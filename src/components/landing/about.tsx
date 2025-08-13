import { BookOpen, Laptop, Users, LibraryIcon } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 animate-fade-in-up">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-body">
              About Sages Library
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              A Hub of Learning and Inspiration
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
              The SAGES Library is a hub of learning and inspiration, offering
              modern reading spaces, digital resources, and a rich collection
              of textbooks, reference books, magazines, newspapers, and
              storybooks. With facilities like book lending, and reading rooms, our library supports both
              academic excellence and personal growth. Here, curiosity meets
              opportunity—nurturing minds, building futures.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-16 mt-12">
          <div className="grid gap-1 text-center animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
            <div className="flex justify-center items-center">
              <LibraryIcon className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-lg font-bold font-headline">Rich Collection</h3>
            <p className="text-sm text-muted-foreground font-body">
              Access a wide range of textbooks, reference books, magazines, and
              more.
            </p>
          </div>
          <div className="grid gap-1 text-center animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
            <div className="flex justify-center items-center">
              <Laptop className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-lg font-bold font-headline">Free Resources</h3>
            <p className="text-sm text-muted-foreground font-body">
              Utilize our digital library and online study materials for modern
              learning.
            </p>
          </div>
          <div className="grid gap-1 text-center animate-fade-in-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
            <div className="flex justify-center items-center">
              <Users className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-lg font-bold font-headline">Modern Spaces</h3>
            <p className="text-sm text-muted-foreground font-body">
              Enjoy our comfortable and well-equipped reading rooms for focused
              study.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
