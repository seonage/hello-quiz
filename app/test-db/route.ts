import { NextResponse, NextRequest } from "next/server";
import { returnAllQuestions } from "@/mongoose/questions/services";

export async function GET(req: NextRequest):Promise<NextResponse> {
    //const questions = await Questions.find({});
    const questions = await returnAllQuestions();
    return NextResponse.json(
        { questions },
        { status: 200 }
    )
}