
import { NextRequest, NextResponse } from "next/server";
import { products } from "@/lib/mock-data";
import { z } from 'zod';

let productData = [...products];

const productSchema = z.object({
  name: z.string().min(1, "Name is required"),
  price: z.number().positive("Price must be a positive number"),
  description: z.string().min(1, "Description is required"),
  image: z.string().url("Image must be a valid URL"),
  categoryId: z.string().min(1, "Category is required"),
  categoryName: z.string().min(1, "Category name is required"),
});

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const product = productData.find(p => p.id === params.id);
  if (product) {
    return NextResponse.json(product);
  }
  return NextResponse.json({ error: "Product not found" }, { status: 404 });
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const productIndex = productData.findIndex(p => p.id === params.id);
  if (productIndex === -1) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  try {
    const json = await request.json();
    const validatedData = productSchema.parse(json);

    const updatedProduct = {
      ...productData[productIndex],
      ...validatedData,
    };

    productData[productIndex] = updatedProduct;
    return NextResponse.json(updatedProduct);

  } catch (error) {
     if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.flatten() }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const productIndex = productData.findIndex(p => p.id === params.id);
  if (productIndex === -1) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  productData.splice(productIndex, 1);
  return NextResponse.json({ message: "Product deleted successfully" }, { status: 200 });
}
