'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from './styles.module.css';
import Link from "next/link";

export default function QuestionCard(props: any): JSX.Element { //Change props to array of questions?
    const[questionNumber, setQuestionNumber] = useState(3);
    const[question, setQuestion] = useState(props.question); //Right now the Question isn't refreshed after use clicks on Next Question
    let rightAnswerDisplay: HTMLElement | null, wrongAnswerDisplay: HTMLElement | null;
    console.log("Passed props initial: " + props.questions + typeof props.questions);
    let parsedProps: QuestionProps[] = JSON.parse(props.questions); //Does it matter if this is strongly typed?
    console.log("What is type of parsedProps? " + typeof parsedProps);
    let poppedQuestion = parsedProps.pop()!; //Assertion should be fine since we are keeping track of number of questions
    console.log("poppedQuestion type: " + typeof poppedQuestion)

    useEffect( () => {
        setQuestion(poppedQuestion.question);
    }, []);

    /*const handleAnswerClick = (event) => {
        let selectedChoice: string = event.target.textContent;

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
    }*/

    const handleQuitClick = () => {
        console.log("Quit game")
    }

    /*const handleNextQuestionClick = () => {
        console.log("Next question clicked");
        setQuestionNumber( prev => (prev - 1) );
        if (rightAnswerDisplay != null && wrongAnswerDisplay != null) {
            rightAnswerDisplay.classList.remove('reveal');
            wrongAnswerDisplay.classList.remove('reveal');
        }
        if (questionNumber != 1 ) {
            router.refresh(); //How to reset the Question without refreshing?
            //Pop question from passedQuestions and Parse it here?
        }
        else {
            //Redirect towards Game Over page with results?
            console.log('Game Over')
            router.push('/');
        }
    }*/

    return (
        <>
            <div className={styles.questionbox}>
                <h1 className={styles.question}>{question}</h1>
            </div>
            <div>
                <Link href="/">
                  <button className={styles.quitgame} onClick={handleQuitClick}>Quit Game</button>
                </Link>
            </div>
        </>    
    )
}