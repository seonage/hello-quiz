import { returnRandomQuestion } from "@/mongoose/questions/services";

/*export async function GET( req: NextRequest): Promise<NextResponse> {
    let question = await returnRandomQuestion();
    return NextResponse.json(
        {
            question
        },
        { status: 200 }
    )
}*/

export async function ServerComponentQuestions(): Promise<JSX.Element | Error> {}