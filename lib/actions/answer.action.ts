"use server";
import Answer from "@/database/answer.model";
import { connectToDatabase } from "../mongoose";
import { CreateAnswerParams, GetAnswersParams } from "./shared.types";
import { revalidatePath } from "next/cache";
import Question from "@/database/question.model";

export async function getAnswers(params: GetAnswersParams) {
  try {
    connectToDatabase();

    const { questionId } = params;
    const answers = await Answer.find({ question: questionId })
      .populate("author", "_id clerkId name picture")
      .sort({ createdAt: -1 });

    return { answers };
  } catch (error) {
    console.log("get answers error:", error);
    throw error;
  }
}

export async function createAnswer(params: CreateAnswerParams) {
  try {
    connectToDatabase();

    const { content, author, question, path } = params;

    // create the answer
    const newAnswer = await Answer.create({
      content,
      author,
      question,
    });

    // add answer to the question's answers array
    await Question.findByIdAndUpdate(question, {
      $push: { answer: newAnswer._id },
    });

    // TODO: add interaction...

    revalidatePath(path);
  } catch (error) {
    console.log("create answer error:", error);
    throw error;
  }
}
