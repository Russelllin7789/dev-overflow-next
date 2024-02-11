import { getQuestionById } from "@/lib/actions/question.action";
import React from "react";

const page = async ({ params }: { params: { questionId: string } }) => {
  const { questionId } = params;
  const result = await getQuestionById({ questionId });

  console.log("q:", result);

  return (
    <div>
      <h1>{result.questions[0].title}</h1>
    </div>
  );
};

export default page;
