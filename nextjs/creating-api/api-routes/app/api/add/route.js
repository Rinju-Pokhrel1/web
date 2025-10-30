import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();
    console.log("Received data:", data);

    return NextResponse.json({
      success: true,
     data: data
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { success: false, message: "Invalid request" },
      { status: 400 }
    );
  }
}
