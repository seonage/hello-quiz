import { NextResponse, NextRequest } from "next/server";
import { returnAllQuestions } from "@/mongoose/questions/services";

export async function GET():Promise<NextResponse> {
    const questions = await returnAllQuestions();
    return NextResponse.json(
        { questions },
        { status: 200 }
    )
}