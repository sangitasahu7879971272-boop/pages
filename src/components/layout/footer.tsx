import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Image src="https://www.sagespumphousekorba.com/img/preloader.png" alt="Sages Library Logo" width={24} height={24} className="h-6 w-6 mr-2" />
            <p className="font-bold text-lg font-headline">Sages Library</p>
          </div>
          <p className="text-sm font-body text-center md:text-left">
            &copy; {new Date().getFullYear()} Sages Library. All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-sm hover:text-primary transition-colors font-body">Privacy Policy</Link>
            <Link href="#" className="text-sm hover:text-primary transition-colors font-body">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
