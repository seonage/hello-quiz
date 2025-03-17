'use client'

import { useState } from "react";
import styles from './styles.module.css';

export default function QuestionCard(props: QuestionProps): JSX.Element {
    const[answer, setAnswer] = useState('');
    const question: String = props.question;
    console.log(props)

    const handleClick = (event) => {
        console.log(event.currentTarget.getAttribute("choice"))
        let selectedChoice: string = event.currentTarget.getAttribute("choice");
        if (answer === '') {
            setAnswer(selectedChoice);
        }
    }

    return (
        <div className={styles.questionbox}>
            <h1 className={styles.question}>{question}</h1>
            <div className={styles.choices}>
                {props.choices.map((choice) => {
                    return <ul key={choice.toString()} choice={choice.toString()} onClick={handleClick}>{choice}</ul>
                })}
            </div>
        </div>
    )
}