import { NextResponse } from "next/server";
import courses from "./data.json";

export async function GET(request) {
  return NextResponse.json(courses);
}

export async function POST(request) {
  const { name, description } = await request.json();
  console.log({ name, description });

  return NextResponse.json({ message: "Course added successfully" });
}
