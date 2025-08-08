import { Timeline } from "@/components/about/Timeline";
import { Card, CardContent } from "@/components/ui/card";
import { HandHeart, Leaf, Sparkles } from "lucide-react";

const philosophyItems = [
    {
        icon: Leaf,
        title: "Sustainable",
        description: "We are committed to using ethically sourced, high-quality materials that are kind to our planet."
    },
    {
        icon: HandHeart,
        title: "Handcrafted",
        description: "Each piece is meticulously crafted by skilled artisans, ensuring unparalleled quality and attention to detail."
    },
    {
        icon: Sparkles,
        title: "Timeless",
        description: "Our designs transcend fleeting trends, offering you timeless elegance you can cherish for years to come."
    }
]

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="relative bg-secondary/30 py-20 md:py-32">
        <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 560">
                <path fill="hsl(var(--primary))" d="M0,160L48,181.3C96,203,192,245,288,250.7C384,256,480,224,576,192C672,160,768,128,864,138.7C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
        </div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-foreground">
            The Art of Feminine Grace
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            LuneFemme is more than just a brand; it's a celebration of strength, elegance, and the timeless beauty that resides in every woman. Our journey is woven with passion, creativity, and a deep respect for craftsmanship.
          </p>
        </div>
      </div>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
           <div className="text-center">
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
                    Our Philosophy
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Three core values guide every stitch and every design we create.
                </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {philosophyItems.map((item, i) => (
                    <Card key={item.title} className="text-center p-8 border-none shadow-lg bg-card transition-transform hover:-translate-y-2 animate-slide-in-up" style={{ animationDelay: `${i * 150}ms`}}>
                        <CardContent>
                            <div className="mx-auto w-16 h-16 rounded-full bg-accent/50 flex items-center justify-center">
                                <item.icon className="w-8 h-8 text-accent-foreground" />
                            </div>
                            <h3 className="font-headline text-2xl font-bold mt-6">{item.title}</h3>
                            <p className="mt-2 text-muted-foreground">{item.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
           <div className="text-center">
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
                    Our Story
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Follow our journey from a simple idea to a global fashion presence.
                </p>
            </div>
            <div className="mt-20">
                <Timeline />
            </div>
        </div>
      </section>
    </div>
  );
}
