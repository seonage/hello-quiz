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
    //console.log(questionJSON);

    return(
        <div>
            <h2>Game Page</h2>
            {questionJSON.question}
            <QuestionCard question={questionJSON}/>
        </div>
    )
}