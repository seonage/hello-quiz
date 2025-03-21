'use client'

import { createRef, useState } from "react";
import styles from './styles.module.css';

export default function QuestionCard(props: QuestionProps): JSX.Element {
    const[answer, setAnswer] = useState('');
    const question: String = props.question;
    let rightAnswerDisplay: HTMLElement | null, wrongAnswerDisplay: HTMLElement | null; //Want to make sure this is set before user does anything on page
    console.log(props)

    const handleClick = (event) => {
        console.log(event)
        let selectedChoice: string = event.target.textContent;

        if (answer === '') {
            setAnswer(selectedChoice);
            if (selectedChoice === props.correct_answer) {
                console.log("Correct");
                rightAnswerDisplay.style.display = "block";
            }
            else {
                console.log("Wrong");
                wrongAnswerDisplay.style.display = "block";
            }
        }
    }

    return (
        <>
            <div className={styles.questionbox}>
                <h1 className={styles.question}>{question}</h1>
                <div className={styles.choices}>
                    {props.choices.map((choice) => {
                        return <ul key={choice} onClick={handleClick}>{choice}</ul>
                    })}
                </div>
            </div>
            <div id="correctAnswer" ref={node => {if (node) {rightAnswerDisplay =  document.getElementById('correctAnswer')}}}>
                <h1>Correct answer</h1>
            </div>
            <div id={"wrongAnswer"} ref={node => {if (node) {wrongAnswerDisplay =  document.getElementById('wrongAnswer')}}}>
                <h1>Wrong answer</h1>
            </div>
        </>
        
    )
}