export const dynamic = 'force-dynamic';

import { returnSingleRandomQuestion } from "@/mongoose/questions/services";
import QuestionCard from "./component";
import { JSX } from "react";
import { notFound } from "next/navigation";

export default async function ServerComponentQuestions(): Promise<JSX.Element | Error> {
    let question: string[] | [];
    let poppedQuestion;
    let questionProps: QuestionProps;
    
    try {
        question = await returnSingleRandomQuestion();
        console.log("Initial data from DB: " + question);
    } catch (err: any) {
        notFound();
    }
    poppedQuestion = JSON.stringify(question.pop());
    console.log("Popped question: " + poppedQuestion);
    questionProps = JSON.parse(poppedQuestion);
    console.log("Passed to component: " + questionProps)

    return(
            <QuestionCard {...questionProps}/>
    )
}