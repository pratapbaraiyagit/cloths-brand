import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const WavyBg = () => (
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
    <svg className="absolute bottom-0 left-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="hsl(var(--primary))" fillOpacity="0.3" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,133.3C672,117,768,139,864,165.3C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
  </div>
);

export function Hero() {
  return (
    <section className="relative bg-background overflow-hidden">
      <WavyBg />
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              Elegance in Every<br/>Dimension
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0">
              Discover LuneFemme's exclusive collection, where timeless fashion meets immersive 3D technology. Explore designs that transcend the ordinary.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="text-lg">
                <Link href="/products">Shop Collection</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg">
                <Link href="/about">Our Story</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-96 md:h-[500px] flex items-center justify-center">
            <div className="absolute w-64 h-64 bg-accent/50 rounded-full blur-3xl"></div>
            <Image
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=600&h=800&auto=format&fit=crop"
              alt="Floating dress"
              width={400}
              height={550}
              className="object-contain rounded-lg shadow-2xl animate-float z-10"
              data-ai-hint="elegant dress"
            />
             <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/40 rounded-full blur-3xl animate-subtle-float animation-delay-3000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
