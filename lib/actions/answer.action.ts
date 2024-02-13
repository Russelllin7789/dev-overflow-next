"use server";
import Answer from "@/database/answer.model";
import { connectToDatabase } from "../mongoose";
import { CreateAnswerParams } from "./shared.types";
import { revalidatePath } from "next/cache";
import Question from "@/database/question.model";

export async function createAnswer(params: CreateAnswerParams) {
  try {
    connectToDatabase();

    const { content, author, question, path } = params;

    // create the answer
    const newAnswer = new Answer({
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
