import Link from "next/link"

export default async function Home(): Promise<JSX.Element | Error> {

  return (
    <>
      <div id="intro">Welcome to Hello! Quiz</div>
      <Link href="/game">
        <button id="newGameButton">New Game</button>
      </Link>
    </>
  )
}