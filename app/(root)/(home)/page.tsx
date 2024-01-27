import Link from "next/link";
import { Button } from "@/components/ui/button";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { HomePageFilters } from "@/constants/filters";
import Filter from "@/components/shared/Filter";
import HomeFilters from "@/components/home/HomeFilters";
import NoResult from "@/components/shared/NoResult";
import QuestionCard from "@/components/cards/QuestionCard";

const questions = [
  {
    id: "1",
    title: "Introduction to JavaScript",
    tags: [
      { id: "101", name: "Programming" },
      { id: "102", name: "JavaScript" },
    ],
    author: {
      id: "201",
      name: "John Doe",
      avatar: "https://example.com/avatar/john_doe.jpg",
    },
    upvotes: 25,
    views: 150,
    answers: [
      { user: "Alice", text: "Great introduction!" },
      { user: "Bob", text: "I have a question about the third paragraph." },
    ],
    createdAt: new Date("2023-06-16T12:30:00Z"),
  },
  {
    id: "2",
    title: "Getting Started with Python",
    tags: [
      { id: "103", name: "Programming" },
      { id: "104", name: "Python" },
    ],
    author: {
      id: "202",
      name: "Jane Smith",
      avatar: "https://example.com/avatar/jane_smith.jpg",
    },
    upvotes: 32,
    views: 200,
    answers: [
      { user: "Charlie", text: "Excellent tutorial!" },
      { user: "David", text: "Can you recommend any additional resources?" },
    ],
    createdAt: new Date("2022-03-15T14:45:00Z"),
  },
  {
    id: "3",
    title: "Web Development Best Practices",
    tags: [
      { id: "105", name: "Web Development" },
      { id: "106", name: "Best Practices" },
    ],
    author: {
      id: "203",
      name: "Emily Johnson",
      avatar: "https://example.com/avatar/emily_johnson.jpg",
    },
    upvotes: 45,
    views: 300,
    answers: [
      { user: "Frank", text: "Thanks for sharing!" },
      { user: "Grace", text: "I have a question about responsive design." },
    ],
    createdAt: new Date("2024-01-14T09:15:00Z"),
  },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions..."
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length >= 1 ? (
          questions.map((question) => (
            <QuestionCard
              key={question.title}
              id={question.id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the
        discussion. our query could be the next big thing others learn from. Get
        involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
