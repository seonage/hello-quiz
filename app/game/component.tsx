'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from './styles.module.css';

export default function QuestionCard(props: QuestionProps): JSX.Element {
    const[questionNumber, setQuestionNumber] = useState(0);
    const router = useRouter();
    let answered = false; //check to make sure this is reset to false after new Question is rendered
    const question: String = props.question;
    let rightAnswerDisplay: HTMLElement | null, wrongAnswerDisplay: HTMLElement | null; //Want to make sure this is set before user does anything on page
    console.log(props)

    const handleAnswerClick = (event) => {
        let selectedChoice: string = event.target.textContent;

        //How to maintain the score of the users? useRef()?
        if (answered === false && rightAnswerDisplay != null && wrongAnswerDisplay != null) {
            if (selectedChoice === props.correct_answer) {
                rightAnswerDisplay.classList.add('reveal');
                answered = true;
            }
            else {
                wrongAnswerDisplay.classList.add('reveal');
                answered = true;
            }
        }
    }

    /*This click should make another call to DB to get a new question and then re-render screen for all players
    Should I trigger a state change that will call something in useEffect?
    */
    const handleNextQuestionClick = (event) => {
        console.log("Next question clicked");
        setQuestionNumber( prev => (prev + 1));
        if (rightAnswerDisplay != null && wrongAnswerDisplay != null) {
            rightAnswerDisplay.classList.remove('reveal');
            wrongAnswerDisplay.classList.remove('reveal');
        }
        router.refresh();
    }

    /*After user clicks Next Question button, what are some things that should happen?
        1. Check to see if every other user has also clicked the button
    */
    return (
        <>
            <div className={styles.questionbox}>
                <h1 className={styles.question}>{question}</h1>
                <div className={styles.choices}>
                    {props.choices.map((choice) => {
                        return <ul key={choice} onClick={handleAnswerClick}>{choice}</ul>
                    })}
                </div>
            </div>
            <div id="correctAnswer" ref={node => {if (node) {rightAnswerDisplay =  document.getElementById('correctAnswer')}}}>
                <h1>Correct answer</h1>
                <button className={styles.nextQuestionButton} onClick={handleNextQuestionClick}>Next Question</button>
            </div>
            <div id={"wrongAnswer"} ref={node => {if (node) {wrongAnswerDisplay =  document.getElementById('wrongAnswer')}}}>
                <h1>Wrong answer</h1>
                <button className={styles.nextQuestionButton} onClick={handleNextQuestionClick}>Next Question</button>
            </div>
        </>
        
    )
}