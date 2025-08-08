
import { NextRequest, NextResponse } from "next/server";
import { categories } from "@/lib/mock-data";
import { z } from 'zod';

let categoryData = [...categories];

const categorySchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  image: z.string().url("Image must be a valid URL"),
});


export async function GET() {
  return NextResponse.json(categoryData);
}

export async function POST(request: NextRequest) {
  try {
    const json = await request.json();
    const validatedData = categorySchema.parse(json);

    const newCategory = {
      id: String(categoryData.length + 1),
      ...validatedData,
    };
    
    categoryData.push(newCategory);

    return NextResponse.json(newCategory, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.flatten() }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
