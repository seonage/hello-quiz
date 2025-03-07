'use client'

import { useState } from "react";
import styles from './styles.module.css';

export default function QuestionCard(props: QuestionProps): JSX.Element {
    const[answer, setAnswer] = useState(null);
    const question: String = props.question;
    const listChoices = props.choices.map((choice) => <ul key={choice.toString()}>{choice}</ul>);
    console.log(props)

    return (
        <div className={styles.questionbox}>
            <h1>Question is: {question}</h1>
            <div className={styles.question}>
                {listChoices}
            </div>
        </div>
    )
}