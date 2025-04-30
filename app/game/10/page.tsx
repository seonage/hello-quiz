import { return10RandomQuestions } from "@/mongoose/questions/services";
import QuestionCard from "./component";

export default async function ServerComponentQuestions(): Promise<JSX.Element | Error> {
    let questions: String[] | [];
    let passedQuestions;
    let stringQuestions: string;
    let questionProps: QuestionProps;
    try {
        questions = await return10RandomQuestions();
        console.log("Initial data from DB: " + questions + typeof questions);
    } catch (err: any) {
        return {
            notFound: true,
        }
    }
    stringQuestions = JSON.stringify(questions);

    return(
            <QuestionCard questions={stringQuestions}/>
    )
}