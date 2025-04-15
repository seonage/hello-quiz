import { return10RandomQuestions } from "@/mongoose/questions/services";
import QuestionCard from "./component";

export default async function ServerComponentQuestions(): Promise<JSX.Element | Error> {
    let questions: String[] | [];
    let poppedQuestion;
    let questionProps: QuestionProps;
    try {
        questions = await return10RandomQuestions();
        console.log(questions);
    } catch (err: any) {
        return {
            notFound: true,
        }
    }
    poppedQuestion = JSON.stringify(questions.pop());
    questionProps = JSON.parse(poppedQuestion);

    return(
            <QuestionCard {...questionProps}/>
    )
}