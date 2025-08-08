
import { NextRequest, NextResponse } from "next/server";
import { products, categories } from "@/lib/mock-data";
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

export async function GET() {
  return NextResponse.json(productData);
}

export async function POST(request: NextRequest) {
  try {
    const json = await request.json();
    const validatedData = productSchema.parse(json);

    const newProduct = {
      id: String(productData.length + 1),
      ...validatedData,
    };
    
    productData.push(newProduct);

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.flatten() }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
