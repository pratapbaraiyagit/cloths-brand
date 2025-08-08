import { CategoryCard } from "@/components/categories/CategoryCard";
import { categories } from "@/lib/mock-data";

export default function CategoriesPage() {
  return (
    <div className="bg-secondary/30">
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
            <div className="text-center">
                <h1 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
                    Shop by Category
                </h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Find your perfect style by exploring our diverse range of curated collections.
                </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {categories.map((category, i) => (
                    <div key={category.id} className="animate-slide-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                        <CategoryCard category={category} />
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}