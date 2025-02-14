import { Schema, InferSchemaType } from "mongoose";

export const QuestionSchema: Schema = new Schema<QuestionType>({
    question: {
        type: "String",
        required: true,
    },
    choices: {
        type: ["String"],
        required: true,
    },
});

export declare type QuestionType = InferSchemaType<typeof QuestionSchema>;