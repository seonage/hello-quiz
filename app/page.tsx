import Link from "next/link"
import { JSX } from "react";
import dbConnect from "../middleware/db-connect";


export default async function Home(): Promise<JSX.Element | Error> {

  return (
    <>
      <div id="intro">
        Welcome to HELLO! QUIZ<br />
        <div className="subtitle">Since2025</div>
      </div>
      <Link href="/game">
        <button className="GameButton">New Game - Unlimited Questions</button>
      </Link>
      <Link href="/game/10">
        <button className="GameButton">New Game - 3 Questions</button>
      </Link>
      
    </>
  )
}