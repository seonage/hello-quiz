export const dynamic = 'force-dynamic';

import { return10RandomQuestions } from "@/mongoose/questions/services";
import QuestionCard from "./component";
import { JSX } from "react";
import { notFound } from "next/navigation";


export default async function ServerComponentQuestions(): Promise<JSX.Element | Error> {
    let questions: string[] | [];
    let stringQuestions: string;

    try {
        questions = await return10RandomQuestions();
        console.log("Initial data from DB: " + questions + typeof questions);
    } catch (err: any) {
        notFound();
    }
    stringQuestions = JSON.stringify(questions);

    return(
            <QuestionCard questions={stringQuestions}/>
    )
}