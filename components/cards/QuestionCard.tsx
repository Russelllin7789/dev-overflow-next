import React from "react";
import Tag from "../shared/tag/Tag";
import Image from "next/image";
import Link from "next/link";

type CardProps = {
  id: string;
  title: string;
  tags: {
    id: string;
    name: string;
  }[];
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  upvotes: number;
  views: number;
  answers: Array<object>;
  createdAt: Date;
};

const QuestionCard = ({
  id,
  title,
  tags,
  author,
  createdAt,
  views,
  upvotes,
  answers,
}: CardProps) => {
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
          {String(createdAt)}
        </span>
        <Link href={`/question/${id}`}>
          <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
            {title}
          </h3>
        </Link>
      </div>

      {/* if signed in add edit delete actions */}

      <div className="mt-3.5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag key={tag.id} id={id} tagContent={tag.name} />
        ))}
      </div>

      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        <div className="flex items-center">
          <div>
            <Image src={author.avatar} alt={author.name} />
          </div>
          <span>{author.name}</span>・<span>{String(createdAt)}</span>
        </div>
        <div className="flex items-center"></div>
      </div>
    </div>
  );
};

export default QuestionCard;
