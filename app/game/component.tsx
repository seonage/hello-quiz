'use client'

import { createRef, useState } from "react";
import styles from './styles.module.css';

export default function QuestionCard(props: QuestionProps): JSX.Element {
    let answered = false;
    const question: String = props.question;
    let rightAnswerDisplay: HTMLElement | null, wrongAnswerDisplay: HTMLElement | null; //Want to make sure this is set before user does anything on page
    console.log(props)

    const handleClick = (event) => {
        let selectedChoice: string = event.target.textContent;

        //Maybe put in state change after user choice is determined to be correct or incorrect
        if (answered === false && rightAnswerDisplay != null && wrongAnswerDisplay != null) {
            if (selectedChoice === props.correct_answer) {
                console.log("Correct");
                rightAnswerDisplay.classList.add('reveal');
                answered = true;
            }
            else {
                console.log("Wrong");
                wrongAnswerDisplay.classList.add('reveal');
                answered = true;
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
                <button className={styles.nextQuestionButton}>Next Question</button>
            </div>
            <div id={"wrongAnswer"} ref={node => {if (node) {wrongAnswerDisplay =  document.getElementById('wrongAnswer')}}}>
                <h1>Wrong answer</h1>
                <button className={styles.nextQuestionButton}>Next Question</button>
            </div>
        </>
        
    )
}