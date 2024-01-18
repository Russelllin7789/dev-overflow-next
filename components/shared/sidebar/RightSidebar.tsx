import React from "react";
import Link from "next/link";
import Image from "next/image";

import Tag from "../tag/Tag";

const RightSidebar = () => {
  interface Question {
    id: number;
    content: string;
    link: string;
  }

  interface Tag {
    id: number;
    content: string;
    link: string;
    tagNumber: number;
  }

  const questions: Question[] = [
    {
      id: 1,
      content:
        "Would it be appropriate to point out an error in another paper during a referee report?",
      link: "/",
    },
    {
      id: 2,
      content: "How can an airconditioning machine exist?",
      link: "/",
    },
    {
      id: 3,
      content: "Interrogated every time crossing UK Border as citizen",
      link: "/",
    },
    {
      id: 4,
      content: "Low digit addition generator",
      link: "/",
    },
    {
      id: 5,
      content: "What is an example of 3 numbers that do not make up a vector?",
      link: "/",
    },
  ];

  const Tags: Tag[] = [
    {
      id: 1,
      content: "JavaScript",
      link: "/",
      tagNumber: 20152,
    },
    {
      id: 2,
      content: "Next.js",
      link: "/",
      tagNumber: 20000,
    },
    {
      id: 3,
      content: "React.js",
      link: "/",
      tagNumber: 18493,
    },
    {
      id: 4,
      content: "Vue.js",
      link: "/",
      tagNumber: 16269,
    },
    {
      id: 5,
      content: "Node.js",
      link: "/",
      tagNumber: 15121,
    },
  ];

  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 h-screen flex-col overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none xl:w-[330px]">
      <div>
        <h3 className="h3-bold text-dark300_light900 mb-[26px]">
          Top Questions
        </h3>
        <ul className="mb-[60px] flex flex-col gap-[30px]">
          {questions.map((question) => (
            <Link
              key={question.id}
              href={question.link}
              className="flex items-center justify-between"
            >
              <p className="body-medium text-dark300_light900">
                {question.content}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="right arrow"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="h3-bold text-dark300_light900 mb-[26px]">
          Popular Tags
        </h3>
        <ul className="flex flex-col gap-[30px]">
          {Tags.map((tag) => (
            <Tag
              key={tag.id}
              tagContent={tag.content}
              tagNumber={tag.tagNumber}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RightSidebar;
