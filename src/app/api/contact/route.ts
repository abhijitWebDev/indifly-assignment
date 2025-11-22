// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { z } from 'zod';

// Zod schema
const ContactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(6, "Phone number too short"),
  company: z.string().min(2, "Company name is required"),
  message: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate using Zod
    const result = ContactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = result.data;

    // Simulate saving / email
    console.log("New contact submission:", data);

    return NextResponse.json(
      { message: "Message received successfully", data: data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
