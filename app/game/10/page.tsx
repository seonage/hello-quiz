import { return10RandomQuestions } from "@/mongoose/questions/services";
import QuestionCard from "./component";

export default async function ServerComponentQuestions(): Promise<JSX.Element | Error> {
    let questions: String[] | [];
    let passedQuestions;
    let poppedQuestion;
    let questionProps: QuestionProps;
    try {
        questions = await return10RandomQuestions();
        console.log("Initial data from DB: " + questions + typeof questions);
    } catch (err: any) {
        return {
            notFound: true,
        }
    }
    passedQuestions = JSON.stringify(questions);
    //Maybe move below two lines into client component. Also should be passing the array of questions as props to the client component?
    //Or keep here and then pass individual question to component but without doing a DB call again
    poppedQuestion = JSON.stringify(questions.pop());
    console.log("PoppedQuestion: " + poppedQuestion);
    questionProps = JSON.parse(poppedQuestion);
    console.log("QuestionProps: " + questionProps);
    console.log("Passed Questions: " + passedQuestions);

    return(
            <QuestionCard questions={passedQuestions}/>
    )
}