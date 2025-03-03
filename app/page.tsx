import dbConnect from "@/middleware/db-connect";

export default async function Home(): Promise<JSX.Element | Error> {

  return (
    <h2>Hello</h2>
  )
}