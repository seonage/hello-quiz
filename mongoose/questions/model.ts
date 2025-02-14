import mongoose, { model } from "mongoose";
import { QuestionSchema, QuestionType } from "./schema";

export default mongoose.models.questions || model<QuestionType>("questions", QuestionSchema);