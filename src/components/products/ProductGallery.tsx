"use client";

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/mock-data";

const ThreeDViewer = dynamic(() => import('@/components/products/ThreeDViewer'), {
  ssr: false,
  loading: () => <Skeleton className="w-full h-full" />,
});

export function ProductGallery({ product }: { product: Product }) {
  const [mainView, setMainView] = useState<'image' | '3d'>('image');
  const [activeThumbnail, setActiveThumbnail] = useState(0);

  const galleryImages = [
    product.image,
    'https://placehold.co/800x800.png',
    'https://placehold.co/800x800.png',
  ];

  const handleThumbnailClick = (index: number) => {
    setActiveThumbnail(index);
    setMainView('image');
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-square w-full rounded-lg overflow-hidden shadow-lg border">
        {mainView === 'image' ? (
          <Image
            src={galleryImages[activeThumbnail]}
            alt={product.name}
            width={800}
            height={800}
            className="w-full h-full object-cover transition-opacity duration-300"
            data-ai-hint="fashion model"
          />
        ) : (
          <ThreeDViewer />
        )}
      </div>
      <div className="grid grid-cols-5 gap-4">
        {galleryImages.map((img, i) => (
          <div 
            key={i} 
            className={cn(
              "aspect-square w-full rounded-md overflow-hidden border-2 transition cursor-pointer",
              activeThumbnail === i && mainView === 'image' ? "border-primary" : "border-transparent hover:border-primary/50"
            )}
            onClick={() => handleThumbnailClick(i)}
          >
            <Image
              src={img}
              alt={`${product.name} view ${i+1}`}
              width={200}
              height={200}
              className="w-full h-full object-cover"
              data-ai-hint="fashion detail"
            />
          </div>
        ))}
        <div 
            key="3d" 
            className={cn(
              "aspect-square w-full rounded-md overflow-hidden border-2 transition cursor-pointer flex items-center justify-center bg-secondary text-muted-foreground",
              mainView === '3d' ? "border-primary" : "border-transparent hover:border-primary/50"
            )}
            onClick={() => setMainView('3d')}
        >
          <span className="font-bold text-lg">3D</span>
        </div>
      </div>
    </div>
  );
}
