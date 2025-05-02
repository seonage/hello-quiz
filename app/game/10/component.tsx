'use client'

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import styles from './styles.module.css';
import Link from "next/link";

export default function QuestionCard(props: any): JSX.Element {
    const router = useRouter();
    const[questionNumber, setQuestionNumber] = useState(3); //When this changes, new question should pop and go through all the variable setting below
    const[question, setQuestion] = useState('');
    const[questionArray, setQuestionArray] = useState(JSON.parse(props.questions)); //Reset this each time a question is answered

    const rightAnswerDisplay = useRef<HTMLDivElement>(null), wrongAnswerDisplay = useRef<HTMLDivElement>(null);
    let currentQuestion: QuestionProps =  JSON.parse(JSON.stringify(questionArray[questionNumber - 1]))
    console.log("Current Question: " + currentQuestion.question + questionNumber);
    let choices: string[] = currentQuestion.choices;
    let correctAnswer: string = currentQuestion.correct_answer;
    let answered = false;
    const renderCount = useRef(0);
    renderCount.current++;

    useEffect( () => {
        setQuestion(currentQuestion.question);
        console.log("Effect question check: " + currentQuestion.question);
        console.log("Use effect called: " + questionNumber);
        console.log(`MyComponent has rendered ${renderCount.current} times`);
    });

    const handleAnswerClick = (event) => {
        let selectedChoice: string = event.target.textContent;

        if (answered === false && rightAnswerDisplay.current != null && wrongAnswerDisplay.current != null) {
            if (selectedChoice === correctAnswer) {
                rightAnswerDisplay.current.classList.add('reveal');
                answered = true;
            }
            else {
                wrongAnswerDisplay.current.classList.add('reveal');
                answered = true;
            }
        }
    }

    const handleQuitClick = () => {
        console.log("Quit game")
    }

    const handleNextQuestionClick = () => {
        console.log("Next question clicked");
        if (rightAnswerDisplay.current != null && wrongAnswerDisplay.current != null) {
            rightAnswerDisplay.current.classList.remove('reveal');
            wrongAnswerDisplay.current.classList.remove('reveal');
        }
        if (questionNumber != 1 ) {
            setQuestionNumber( (prev) => (prev - 1));
        }
        else {
            //Redirect towards Game Over page with results?
            console.log('Game Over')
            router.push('/');
        }
    }

    return (
        <>
            <div className={styles.questionbox}>
                <h1 className={styles.question}>{question}</h1>
                <div className={styles.choices}>
                    {choices.map((choice) => {
                        return <ul key={choice} onClick={handleAnswerClick}>{choice}</ul>
                    })}
                </div>
            </div>
            <div id="correctAnswer" ref={rightAnswerDisplay}>
                <h1>Correct answer</h1>
                <button className={styles.nextQuestionButton} onClick={handleNextQuestionClick}>Next Question</button>
            </div>
            <div id={"wrongAnswer"} ref={wrongAnswerDisplay}>
                <h1>Wrong answer</h1>
                <button className={styles.nextQuestionButton} onClick={handleNextQuestionClick}>Next Question</button>
            </div>
            <div>
                <Link href="/">
                  <button className={styles.quitgame} onClick={handleQuitClick}>Quit Game</button>
                </Link>
            </div>
        </>    
    )
}