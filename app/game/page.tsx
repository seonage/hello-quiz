import { returnSingleRandomQuestion } from "@/mongoose/questions/services";
import QuestionCard from "./component";

export default async function ServerComponentQuestions(): Promise<JSX.Element | Error> {
    let question: String[] | [];
    let poppedQuestion: string;
    let questionJSON;
    try {
        question = await returnSingleRandomQuestion();
    } catch (err: any) {
        return {
            notFound: true,
        }
    }
    poppedQuestion = JSON.stringify(question.pop());
    questionJSON = JSON.parse(poppedQuestion);

    return(
        <div>
            <h2>Game Page</h2>
            <QuestionCard question={questionJSON}/>
        </div>
    )
}