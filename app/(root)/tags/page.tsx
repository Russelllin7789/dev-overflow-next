import Link from "next/link";
import { TagFilters } from "@/constants/filters";
import LocalSearch from "@/components/shared/search/LocalSearch";
import Filter from "@/components/shared/Filter";
import { getAllTags } from "@/lib/actions/tag.action";

const page = async () => {
  const result = await getAllTags({});

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">All Tags</h1>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/community"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search by tag name..."
          otherClasses="flex-1"
        />
        <Filter
          filters={TagFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
        />
      </div>

      <section className="mt-12 flex flex-wrap gap-4">
        {result.tags.length >= 0 ? (
          result.tags.map((tag) => <div key={tag.name}>{tag.name}</div>)
        ) : (
          <div className="paragraph-regular text-dark200_light800 mx-auto max-w-4xl text-center">
            <p>No tags yet</p>
            <Link
              href="/ask-question"
              className="mt-2 font-bold text-accent-blue"
            >
              Create question to be the very first!
            </Link>
          </div>
        )}
      </section>
    </>
  );
};

export default page;
