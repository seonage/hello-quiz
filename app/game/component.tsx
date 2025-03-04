'use client'

import { useState } from "react";

export default function QuestionCard(props) {
    const[answer, setAnswer] = useState(null);
    console.log(props.question)

    return (
        <h1>Question is: {props.question.question}</h1>
    )
}