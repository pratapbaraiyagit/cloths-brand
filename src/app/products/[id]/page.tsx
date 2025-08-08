
import ProductClient from "@/components/products/ProductClient";
import { products } from "@/lib/mock-data";
import { notFound } from "next/navigation";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter(p => p.categoryId === product.categoryId && p.id !== product.id).slice(0, 4);

  return <ProductClient product={product} relatedProducts={relatedProducts} />;
}
