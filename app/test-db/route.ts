import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/middleware/db-connect";
import Questions from "mongoose/questions/model"
import { returnAllQuestions } from "@/mongoose/questions/services";

dbConnect();

export async function GET(req: NextRequest):Promise<NextResponse> {
    //const questions = await Questions.find({});
    const questions = await returnAllQuestions();
    return NextResponse.json(
        { questions },
        { status: 200 }
    )
}