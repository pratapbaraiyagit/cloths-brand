import Image from "next/image";
import Link from "next/link";
import { type Product } from "@/lib/mock-data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, ShoppingBag } from "lucide-react";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="group w-full overflow-hidden rounded-lg border-none shadow-md transition-shadow hover:shadow-xl">
      <CardContent className="p-0">
        <div className="relative h-96 overflow-hidden">
           <Link href={`/products/${product.id}`} className="block">
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={800}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              data-ai-hint="fashion model"
            />
          </Link>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
            <Button size="icon" variant="secondary" aria-label="Quick View" asChild>
              <Link href={`/products/${product.id}`}>
                <Eye className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="icon" aria-label="Add to Bag">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>
        </div>
         <Link href={`/products/${product.id}`} className="block">
            <div className="p-4 bg-card">
              <h3 className="font-headline text-xl font-semibold text-foreground truncate">{product.name}</h3>
              <p className="mt-1 text-lg font-semibold text-muted-foreground">${product.price.toFixed(2)}</p>
            </div>
        </Link>
      </CardContent>
    </Card>
  );
}
