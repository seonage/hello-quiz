'use client'

import { useState } from "react";

export default function QuestionCard(props: QuestionProps): JSX.Element {
    const[answer, setAnswer] = useState(null);
    const question: String = props.question;
    const listChoices = props.choices.map((choice) => <li key={choice.toString()}>{choice}</li>);
    console.log(props)

    return (
        <>
            <h1>Question is: {question}</h1>
            {listChoices}
        </>
    )
}