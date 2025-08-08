
"use client";

import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, Truck, Star, Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ProductGallery } from "./ProductGallery";
import { ProductCard } from "./ProductCard";
import type { Product } from "@/lib/mock-data";

export default function ProductClient({ product, relatedProducts }: { product: Product, relatedProducts: Product[] }) {

  return (
    <>
      <div className="bg-background">
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            
            <ProductGallery product={product} />

            <div className="py-4">
              <p className="text-accent font-semibold tracking-wide uppercase">{product.categoryName}</p>
              <h1 className="font-headline text-4xl md:text-5xl font-bold mt-2 text-foreground">
                {product.name}
              </h1>

              <div className="mt-4 flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-muted-foreground text-sm">(123 reviews)</span>
              </div>
              
              <p className="mt-4 text-3xl font-semibold text-foreground">
                ${product.price.toFixed(2)}
              </p>
              
              <p className="mt-6 text-base text-muted-foreground leading-relaxed">
                {product.description}
              </p>
              
               <div className="mt-6 flex items-center gap-2 text-sm text-green-600">
                <Check className="w-5 h-5" />
                <span>In Stock - Ready to Ship</span>
              </div>


              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="w-full sm:w-auto flex-grow text-lg shadow-lg hover:shadow-primary/50 transition-shadow">
                  <ShoppingBag className="mr-2 h-5 w-5" /> Add to Bag
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  <Heart className="h-5 w-5" />
                  <span className="sr-only">Add to Wishlist</span>
                </Button>
              </div>
              
              <div className="mt-10">
                <Accordion type="single" collapsible defaultValue="item-1">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-semibold">Details & Fit</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground space-y-2">
                     <p> This piece is designed for a regular fit. We recommend you get your regular size. Made with a mid-weight non-stretch fabric.</p>
                     <p>{product.description} More details about the fabric, fit, and care instructions can be placed here.</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg font-semibold">Shipping & Returns</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                       <div className="flex items-start gap-4">
                          <Truck className="h-6 w-6 mt-1 text-accent" />
                          <div>
                              <p className="font-semibold">Free Shipping</p>
                              <p>Enjoy complimentary shipping on all orders over $150.</p>
                               <p className="mt-2 font-semibold">Easy Returns</p>
                              <p>We offer a 30-day return policy for a hassle-free experience.</p>
                          </div>
                       </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

            </div>
          </div>
        </div>
      </div>
      {relatedProducts.length > 0 && (
        <section className="py-20 md:py-28 bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
                        You Might Also Like
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Complete your look with these related styles from the {product.categoryName} collection.
                    </p>
                </div>
                 <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {relatedProducts.map((relatedProduct, i) => (
                        <div key={relatedProduct.id} className="animate-slide-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                            <ProductCard product={relatedProduct} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
      )}
    </>
  );
}
