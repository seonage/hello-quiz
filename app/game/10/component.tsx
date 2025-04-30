'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from './styles.module.css';
import Link from "next/link";

export default function QuestionCard(props: any): JSX.Element {
    const router = useRouter();
    const[questionNumber, setQuestionNumber] = useState(3); //When this changes, new question should pop and go through all the variable setting below
    const[question, setQuestion] = useState('');
    const[questionArray, setQuestionArray] = useState(JSON.parse(props.questions)); //Reset this each time a question is answered

    //Below is commented out because I'm setting props passed from server component to a hook as an array and then popping from array each time
    //new question is needed

    console.log("Question Array state: " + questionArray);
    let rightAnswerDisplay: HTMLElement | null, wrongAnswerDisplay: HTMLElement | null;
    console.log("Passed props initial: " + props.questions + typeof props.questions);
    let parsedProps: QuestionProps[] = JSON.parse(props.questions); //Does it matter if this is strongly typed?
    console.log("What is type of parsedProps? " + typeof parsedProps);
    let poppedQuestion = parsedProps.pop()!; //Assertion should be fine since we are keeping track of number of questions
    console.log("poppedQuestion type: " + typeof poppedQuestion)
    let choices: string[] = poppedQuestion.choices;
    let correctAnswer: string = poppedQuestion.correct_answer;
    let answered = false;
    console.log("Answered is: " + answered); // Printing this out because I'm trying to see if variables are being reset
    

    useEffect( () => {
        setQuestion(poppedQuestion.question);
        //setQuestionArray(parsedProps); //Figure out way to properly set this array. Right now is undefined because no declaration yet
        console.log("Use effect called");
    });

    //Second effect that fires when question is popped?

    const handleAnswerClick = (event) => {
        let selectedChoice: string = event.target.textContent;

        if (answered === false && rightAnswerDisplay != null && wrongAnswerDisplay != null) {
            if (selectedChoice === correctAnswer) {
                rightAnswerDisplay.classList.add('reveal');
                answered = true;
            }
            else {
                wrongAnswerDisplay.classList.add('reveal');
                answered = true;
            }
        }
    }

    const handleQuitClick = () => {
        console.log("Quit game")
    }

    const handleNextQuestionClick = () => {
        console.log("Next question clicked");
        if (rightAnswerDisplay != null && wrongAnswerDisplay != null) {
            rightAnswerDisplay.classList.remove('reveal');
            wrongAnswerDisplay.classList.remove('reveal');
        }
        if (questionNumber != 1 ) {
            setQuestionNumber( (prev) => (prev - 1));
            setQuestionArray(parsedProps); //Causing issue since this is a QuestionProps[] type rather than string
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
            <div id="correctAnswer" ref={node => {if (node) {rightAnswerDisplay =  document.getElementById('correctAnswer')}}}>
                <h1>Correct answer</h1>
                <button className={styles.nextQuestionButton} onClick={handleNextQuestionClick}>Next Question</button>
            </div>
            <div id={"wrongAnswer"} ref={node => {if (node) {wrongAnswerDisplay =  document.getElementById('wrongAnswer')}}}>
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