import { returnSingleRandomQuestion } from "@/mongoose/questions/services";
import QuestionCard from "./component";

export default async function ServerComponentQuestions(): Promise<JSX.Element | Error> {
    let question: String[] | [];
    let poppedQuestion;
    let questionProps: QuestionProps;
    try {
        question = await returnSingleRandomQuestion();
    } catch (err: any) {
        return {
            notFound: true,
        }
    }
    poppedQuestion = JSON.stringify(question.pop());
    questionProps = JSON.parse(poppedQuestion);

    return(
            <QuestionCard {...questionProps}/>
    )
}