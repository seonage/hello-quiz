import dbConnect from "@/middleware/db-connect";

export default async function Home(): Promise<JSX.Element | Error> {
  try {
    await dbConnect();
  } catch (err) {
    throw new Error("Could not connect")
  }

  return (
    <h2>Hello</h2>
  )
}