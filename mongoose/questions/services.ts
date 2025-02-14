import Questions from "mongoose/questions/model";
import { QuestionType } from "./schema";

export async function returnAllQuestions(): Promise<QuestionType[] | []> {
    try {
        let result: Array<QuestionType | undefined> = await Questions.find();
        return result as QuestionType[];
    } catch (err) {
        console.log(err);
    }
    return [];
}