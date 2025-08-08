
import { Suspense } from 'react';
import { ProductsClient } from "@/components/products/ProductsClient";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from '@/components/ui/skeleton';

function ProductsLoading() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <div className="text-center">
            <Skeleton className="h-12 w-3/4 mx-auto" />
            <Skeleton className="h-6 w-1/2 mx-auto mt-4" />
        </div>
        <Separator className="my-8" />
        <div className="flex justify-end mb-8">
            <Skeleton className="h-10 w-full md:w-64" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {[...Array(8)].map((_, i) => (
             <Skeleton key={i} className="h-[450px] w-full" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<ProductsLoading />}>
      <ProductsClient />
    </Suspense>
  );
}
