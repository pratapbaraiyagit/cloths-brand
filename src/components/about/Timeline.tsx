import { Award, Gem, Rocket, Star } from "lucide-react";

const timelineEvents = [
  {
    icon: Rocket,
    year: "2018",
    title: "The Dream Begins",
    description: "LuneFemme was founded with a vision to blend classic elegance with modern, accessible fashion for every woman."
  },
  {
    icon: Gem,
    year: "2020",
    title: "First Collection",
    description: "Our debut collection, 'Celestial Dreams,' launched, featuring handcrafted pieces inspired by the night sky."
  },
  {
    icon: Award,
    year: "2022",
    title: "Fashion Forward Award",
    description: "Honored with the 'Innovator in Fashion' award for our commitment to sustainable practices and unique designs."
  },
  {
    icon: Star,
    year: "2024",
    title: "Global Expansion",
    description: "Expanded our reach to a global audience, bringing the LuneFemme experience to fashion lovers worldwide."
  },
]

export function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border"></div>
      {timelineEvents.map((event, index) => (
        <div key={index} className="relative flex items-center justify-between w-full mb-12">
          <div className={`w-5/12 ${index % 2 === 0 ? 'order-1 text-right' : 'order-3 text-left'}`}>
            <p className="font-headline text-2xl font-bold text-foreground">{event.year}</p>
            <h3 className="text-xl font-semibold mt-1 text-primary-foreground">{event.title}</h3>
            <p className="mt-2 text-muted-foreground">{event.description}</p>
          </div>

          <div className="z-10 order-2">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent shadow-md">
              <event.icon className="w-6 h-6 text-accent-foreground" />
            </div>
          </div>
          
          <div className="w-5/12 order-1"></div>
        </div>
      ))}
    </div>
  );
}
