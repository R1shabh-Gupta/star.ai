import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  const conString = process.env.MONGODB_URI;
  if (!conString) {
    throw new Error("MONGODB_URI environment variable is not defined");
  }

  try {
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(conString, {
        autoIndex: true,
      });
    }

    const db = mongoose.connection.db;
    const collection = db.collection("SearchEngineData");

    const data = await collection.find({}).toArray();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return new NextResponse("Error fetching data", { status: 500 });
  }
}
