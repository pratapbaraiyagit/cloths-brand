import Link from "next/link";
import { type Category } from "@/lib/mock-data";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const AbstractBg = ({ className }: { className?: string }) => (
    <div className={`absolute inset-0 transition-transform duration-500 group-hover:scale-110 ${className}`}>
        <svg width="100%" height="100%" viewBox="0 0 400 300" preserveAspectRatio="none">
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 0.2}} />
                    <stop offset="100%" style={{stopColor: 'hsl(var(--accent))', stopOpacity: 0.3}} />
                </linearGradient>
            </defs>
            <path d="M0,150 C50,50 150,250 200,150 S350,50 400,150 L400,300 L0,300 Z" fill="url(#grad1)" />
        </svg>
    </div>
);


export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link href={`/categories?filter=${category.id}`}>
        <Card className="group relative w-full h-64 overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-none">
            <AbstractBg />
            <CardContent className="relative z-10 flex h-full flex-col justify-end p-6 bg-gradient-to-t from-black/50 to-transparent">
                <h3 className="font-headline text-2xl font-bold text-white">{category.name}</h3>
                <p className="mt-2 text-sm text-white/80 max-w-xs">{category.description}</p>
                <div className="mt-4 flex items-center text-white font-semibold">
                    Shop Now <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
            </CardContent>
        </Card>
    </Link>
  );
}
