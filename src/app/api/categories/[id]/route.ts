
import { NextRequest, NextResponse } from "next/server";
import { categories } from "@/lib/mock-data";
import { z } from 'zod';

let categoryData = [...categories];

const categorySchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  image: z.string().url("Image must be a valid URL"),
});

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const category = categoryData.find(c => c.id === params.id);
  if (category) {
    return NextResponse.json(category);
  }
  return NextResponse.json({ error: "Category not found" }, { status: 404 });
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const categoryIndex = categoryData.findIndex(c => c.id === params.id);
  if (categoryIndex === -1) {
    return NextResponse.json({ error: "Category not found" }, { status: 404 });
  }

  try {
    const json = await request.json();
    const validatedData = categorySchema.parse(json);

    const updatedCategory = {
      ...categoryData[categoryIndex],
      ...validatedData,
    };

    categoryData[categoryIndex] = updatedCategory;
    return NextResponse.json(updatedCategory);

  } catch (error) {
     if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.flatten() }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const categoryIndex = categoryData.findIndex(c => c.id === params.id);
  if (categoryIndex === -1) {
    return NextResponse.json({ error: "Category not found" }, { status: 404 });
  }

  categoryData.splice(categoryIndex, 1);
  return NextResponse.json({ message: "Category deleted successfully" }, { status: 200 });
}
