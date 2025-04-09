import Link from "next/link"

export default async function Home(): Promise<JSX.Element | Error> {

  return (
    <Link href="/game">
      <button id="nextGameButton">New Game</button>
    </Link>
  )
}