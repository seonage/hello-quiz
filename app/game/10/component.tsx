'use client'

import { useState, useRef, JSX } from "react";
import { useRouter } from "next/navigation";
import styles from './styles.module.css';
import Link from "next/link";

export default function QuestionCard(props: any): JSX.Element {
    const router = useRouter();
    const[questionNumber, setQuestionNumber] = useState(3);
    const questionArray = JSON.parse(props.questions);

    const rightAnswerDisplay = useRef<HTMLDivElement>(null), wrongAnswerDisplay = useRef<HTMLDivElement>(null);
    const answered = useRef(false);
    const renderCount = useRef(0);
    renderCount.current++;

    console.log("Question Number: " + questionNumber);
    console.log(`MyComponent has rendered ${renderCount.current} times`);

    const currentQuestion = questionArray[questionNumber - 1];
    const { question, choices, correct_answer } = currentQuestion;
    const firstQuestion = questionArray[2];
    console.log("First question is: " + firstQuestion.question);

    const handleAnswerClick = (event: any) => {
        const selectedChoice: string = event.target.textContent;

        if (answered.current === false && rightAnswerDisplay.current != null && wrongAnswerDisplay.current != null) {
            if (selectedChoice === correct_answer) {
                rightAnswerDisplay.current.classList.add('reveal');
                answered.current = true;
            }
            else {
                wrongAnswerDisplay.current.classList.add('reveal');
                answered.current = true;
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
            answered.current = false;
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
                    {choices.map((choice: string) => {
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