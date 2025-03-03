import { returnSingleRandomQuestion } from "@/mongoose/questions/services";

export default async function ServerComponentQuestions(): Promise<JSX.Element | Error> {
    try {
        let question = await returnSingleRandomQuestion();
        console.log(question);
    } catch (err: any) {
        return {
            notFound: true,
        }
    }

    return(
        <div>
            <h2>Game Page</h2>
        </div>
    )
}