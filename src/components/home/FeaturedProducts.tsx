import { products } from "@/lib/mock-data";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FeaturedProducts() {
  const featured = products.slice(0, 4);

  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
            Featured Collection
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked styles from our latest collection, combining classic elegance with a modern twist.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featured.map((product, i) => (
            <div key={product.id} className="animate-slide-in-up" style={{ animationDelay: `${i * 100}ms` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
            <Button asChild size="lg" className="text-lg">
                <Link href="/products">
                    View All Products <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
