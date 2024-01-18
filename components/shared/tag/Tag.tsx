import React from "react";
import Link from "next/link";

const Tag = ({
  tagContent,
  tagNumber,
}: {
  tagContent: string;
  tagNumber?: number;
}) => {
  return (
    <Link href="/" className="flex items-center justify-between">
      <p className="btn text-light400_light500 subtle-medium rounded-[6px] px-4 py-2 uppercase">
        {tagContent}
      </p>
      {tagNumber && (
        <p className="body-medium text-dark300_light900 small-medium">
          {tagNumber}
        </p>
      )}
    </Link>
  );
};

export default Tag;