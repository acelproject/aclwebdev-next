import { NextResponse } from "next/server";

import connectMongoDB from "../../../lib/mongodb";
import Reviews from "../../../models/reviews";


export async function POST(request) {
    const { name,avatar,job,review } = await request.json();
    await connectMongoDB();
    await Reviews.create({ name,avatar,job,review});
    return NextResponse.json(
      { message: "Your Review Posted." },
      { status: 201 }
    );
  }


// get all data
export async function GET() {
    await connectMongoDB();
    const reviews = await Reviews.find()
    return NextResponse.json({ data: reviews});
  }