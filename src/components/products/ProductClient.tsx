
"use client";

import { products } from "@/lib/mock-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, Truck } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

const ThreeDViewer = dynamic(() => import('@/components/products/ThreeDViewer'), {
  ssr: false,
  loading: () => <Skeleton className="w-full h-full" />,
});

export default function ProductClient({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <div className="flex flex-col gap-4">
             <div className="aspect-square w-full rounded-lg overflow-hidden shadow-lg">
                <ThreeDViewer />
            </div>
            <div className="grid grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="aspect-square w-full rounded-md overflow-hidden border-2 border-transparent hover:border-primary transition cursor-pointer">
                        <Image
                            src={product.image}
                            alt={`${product.name} view ${i+1}`}
                            width={200}
                            height={200}
                            className="w-full h-full object-cover"
                             data-ai-hint="fashion detail"
                        />
                    </div>
                ))}
            </div>
          </div>

          <div>
            <p className="text-accent font-semibold">{product.categoryName}</p>
            <h1 className="font-headline text-4xl md:text-5xl font-bold mt-2 text-foreground">
              {product.name}
            </h1>
            <p className="mt-4 text-3xl font-semibold text-foreground">
              ${product.price.toFixed(2)}
            </p>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="w-full sm:w-auto flex-grow text-lg">
                <ShoppingBag className="mr-2 h-5 w-5" /> Add to Bag
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Add to Wishlist</span>
              </Button>
            </div>
            
            <div className="mt-8">
              <Accordion type="single" collapsible defaultValue="item-1">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg">Description</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {product.description} More details about the fabric, fit, and care instructions can be placed here.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg">Shipping & Returns</AccordionTrigger>
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
  );
}
