import { categories } from "@/lib/mock-data";
import { CategoryCard } from "@/components/categories/CategoryCard";

export function FeaturedCategories() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
            Shop by Category
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collections, designed for every occasion and season.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category, i) => (
             <div key={category.id} className="animate-slide-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                <CategoryCard category={category} />
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
