import Image from "next/image";
import React from "react";

interface Props {
  isUpvoted: boolean;
  upvotedNum: number;
  isDownvoted: boolean;
  downvotedNum: number;
  isFavorited: boolean;
}

const Votes = ({
  isUpvoted,
  upvotedNum,
  isDownvoted,
  downvotedNum,
  isFavorited,
}: Props) => {
  return (
    <div className="flex items-center">
      <div className="mr-2.5 flex items-center">
        <Image
          src={
            isUpvoted
              ? "../../public/assets/icons/upvoted.svg"
              : "../../public/assets/icons/upvote.svg"
          }
          width={18}
          height={18}
          alt="upvote icon"
          className="mr-1.5"
        />
        <p className="btn-secondary rounded-[2px] px-[3px] py-[3.2px]">
          {upvotedNum}
        </p>
      </div>
      <div className="mr-2.5 flex items-center">
        <Image
          src={
            isDownvoted
              ? "../../public/assets/icons/downvoted.svg"
              : "../../public/assets/icons/downvote.svg"
          }
          width={18}
          height={18}
          alt="downvote icon"
          className="mr-1.5"
        />
        <p className="btn-secondary rounded-[2px] px-[3px] py-[3.2px]">
          {downvotedNum}
        </p>
      </div>
      <div>
        <Image
          src={
            isFavorited
              ? "../../public/assets/icons/star-filled.svg"
              : "../../public/assets/icons/star.svg"
          }
          width={18}
          height={18}
          alt="favorite icon"
        />
      </div>
    </div>
  );
};

export default Votes;
