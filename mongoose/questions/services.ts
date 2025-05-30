import Questions from "mongoose/questions/model";
import { QuestionType } from "./schema";
import dbConnect from "@/middleware/db-connect";

export async function returnAllQuestions(): Promise<QuestionType[] | []> {
    try {
        await dbConnect();
        let result: Array<QuestionType | undefined> = await Questions.find();
        return result as QuestionType[];
    } catch (err) {
        console.log('Could not recieve all the questions ', err);
    }
    return [];
}


export async function returnSingleRandomQuestion() {
    try {
        await dbConnect();
        let question = await Questions.aggregate([{ $sample: { size: 1 } }]);
        return question;
    } catch (err) {
        console.log('Could not retrieve a single question ', err);
    }
    return [];
}

export async function return10RandomQuestions() {
    try {
        //Temporarily setting as 3 until I have more questions in the database
        await dbConnect();
        let questions = await Questions.aggregate([{ $sample: { size : 3 }}]);
        return questions;
    } catch (err) {
        console.log('Could not retrieve questions', err);
    }
    return [];
}