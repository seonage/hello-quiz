'use client'

import { useState } from "react";

export default function QuestionCard(props: any): JSX.Element {
    const[answer, setAnswer] = useState(null);
    const question: String  = props.question.question;
    const listChoices: String[] = props.question.choices.map((choice: string) => <li key={choice}>{choice}</li>);
    console.log(props.question)

    return (
        <>
            <h1>Question is: {question}</h1>
            {listChoices}
        </>
    )
}