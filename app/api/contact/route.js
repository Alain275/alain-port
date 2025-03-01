// app/api/contact/route.js
import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ 
    success: true,
    message: "This API is deprecated. Form submission should go directly to FormSubmit." 
  });
}

export async function GET() {
  return NextResponse.json({ 
    success: true,
    message: "This API is deprecated. Form submission should go directly to FormSubmit." 
  });
}