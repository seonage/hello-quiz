import Questions from "mongoose/questions/model";
import { QuestionType } from "./schema";

export async function returnAllQuestions(): Promise<QuestionType[] | []> {
    try {
        let result: Array<QuestionType | undefined> = await Questions.find();
        return result as QuestionType[];
    } catch (err) {
        console.log('Could not recieve all the questions ', err);
    }
    return [];
}


export async function returnSingleRandomQuestion() {
    try {
        let question = await Questions.aggregate([{ $sample: { size: 1 } }]);
        return question;
    } catch (err) {
        console.log('Could not retrieve a single question ', err)
    }
}