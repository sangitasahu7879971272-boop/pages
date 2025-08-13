import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';

export function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-accent-foreground">
              Visit or Contact Us
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
              We're here to help you on your quest for knowledge.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl items-start gap-8 md:grid-cols-2 md:gap-12 lg:gap-16 mt-12">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-primary" />
                  <span className="font-headline">Library Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-2 font-body text-left">
                <div className="flex justify-between"><span>Monday - Friday:</span> <span>9:00 AM - 8:00 PM</span></div>
                <div className="flex justify-between"><span>Saturday:</span> <span>10:00 AM - 6:00 PM</span></div>
                <div className="flex justify-between"><span>Sunday:</span> <span>Closed</span></div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                   <Phone className="h-6 w-6 text-primary" />
                  <span className="font-headline">Get in Touch</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 font-body text-left">
                <a href="mailto:info@sageslibrary.com" className="flex items-center gap-3 hover:text-primary transition-colors"><Mail className="h-5 w-5" /> info@sageslibrary.com</a>
                <a href="tel:+911234567890" className="flex items-center gap-3 hover:text-primary transition-colors"><Phone className="h-5 w-5" /> +91 123 456 7890</a>
                <p className="flex items-center gap-3"><MapPin className="h-5 w-5" /> Sages Library, Pump House, Korba, Chhattisgarh</p>
              </CardContent>
            </Card>
          </div>
          <div className="w-full h-full min-h-[400px] rounded-xl overflow-hidden shadow-lg border">
             <Image
              src="https://placehold.co/600x600.png"
              alt="Map to Sages Library"
              width={600}
              height={600}
              className="w-full h-full object-cover transition-transform hover:scale-105"
              data-ai-hint="city map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
