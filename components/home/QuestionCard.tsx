import React from "react";
import Tag from "../shared/tag/Tag";
import Image from "next/image";

type CardProps = {
  question: string;
  tags: {
    tagContent: string;
    tagNumber?: number;
  }[];
  author: {
    name: string;
    avatar: string;
  };
  raisedDate: string;
  voteCount: number;
  answerCount: number;
  viewCount: number;
};

const QuestionCard = ({
  question,
  tags,
  author,
  raisedDate,
  viewCount,
  voteCount,
  answerCount,
}: CardProps) => {
  return (
    <div>
      <p>{question}</p>
      {tags.map((tag) => (
        <Tag
          key={tag.tagContent}
          tagContent={tag.tagContent}
          tagNumber={tag.tagNumber}
        />
      ))}
      <div className="flex flex-wrap">
        <div className="flex items-center">
          <div>
            <Image src={author.avatar} alt={author.name} />
          </div>
          <span>{author.name}</span>・<span>{raisedDate}</span>
        </div>
        <div className="flex items-center"></div>
      </div>
    </div>
  );
};

export default QuestionCard;
