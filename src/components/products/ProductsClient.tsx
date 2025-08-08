
"use client"

import { ProductCard } from "@/components/products/ProductCard";
import { products, categories } from "@/lib/mock-data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export function ProductsClient() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState(initialCategory || "all");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(p => p.categoryId === selectedCategory));
    }
  }, [selectedCategory]);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <div className="text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
            Our Collection
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our full range of exquisite apparel and accessories, crafted with passion and precision.
          </p>
        </div>

        <Separator className="my-8" />

        <div className="flex justify-end mb-8">
            <div className="w-full md:w-64">
                <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                    <SelectTrigger>
                        <SelectValue placeholder="Filter by category" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        {categories.map((category) => (
                            <SelectItem key={category.id} value={category.id}>
                                {category.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product, i) => (
            <div key={product.id} className="animate-slide-in-up" style={{ animationDelay: `${i * 50}ms` }}>
                <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
