
import ProductClient from "@/components/products/ProductClient";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  return <ProductClient params={params} />;
}
