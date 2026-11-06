import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { sendContactEmail } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, budget, selectedServices, message } = body;

    // ۱. بیسک ویلیڈیشن
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // ۲. ڈیٹا بیس میں سیو کرنے سے *پہلے* ای میل بھیجیں
    try {
      await sendContactEmail({
        name,
        email,
        company,
        budget,
        selectedServices,
        message,
      });
    } catch (emailError) {
      console.error("Email Sending Error:", emailError);
      // اگر آپ چاہیں کہ ای میل فیل ہونے پر فارم رک جائے تو یہاں return کر سکتے ہیں،
      // ورنہ آگے بڑھ کر DB میں سیو کر سکتے ہیں تاکہ لیڈ ضائع نہ ہو۔
    }

    // ۳. اب ڈیٹا بیس (Prisma) میں سیو کریں
    const newInquiry = await prisma.projectInquiry.create({
      data: {
        name,
        email,
        company: company || null,
        budget: budget || "$1k - $5k",
        selectedServices: selectedServices || [],
        message,
      },
    });

    return NextResponse.json(
      { success: true, data: newInquiry },
      { status: 201 }
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}