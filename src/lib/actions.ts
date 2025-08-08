"use server";

import { z } from "zod";

const inquirySchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  reason: z.string(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function submitInquiry(prevState: any, formData: FormData) {
  const validatedFields = inquirySchema.safeParse({
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    reason: formData.get("reason"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors below.",
    };
  }
  
  // Here you would typically send an email or save to a database.
  // For this demo, we'll just log the data.
  console.log("New Inquiry Received:");
  console.log(validatedFields.data);

  return {
    message: "Thank you for your message! We will get back to you shortly.",
    errors: {},
  };
}
