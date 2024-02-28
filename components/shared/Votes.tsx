"use client";
import { formatAndDivideNumber } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface Props {
  type: string;
  itemId: string;
  userId: string;
  upvotes: number;
  hasupVoted: boolean;
  downvotes: number;
  hasdownVoted: boolean;
  hasSaved?: boolean;
  //   isUpvoted: boolean;
  //   upvotedNum: number;
  //   isDownvoted: boolean;
  //   downvotedNum: number;
  //   isFavorited: boolean;
}

const Votes = ({
  type,
  itemId,
  userId,
  upvotes,
  hasupVoted,
  downvotes,
  hasdownVoted,
  hasSaved,
}: Props) => {
  return (
    <div className="flex gap-5">
      <div className="flex-center gap-2.5">
        <div className="flex-center gap-1.5">
          <Image
            src={
              hasupVoted
                ? "/assets/icons/upvoted.svg"
                : "/assets/icons/upvote.svg"
            }
            width={18}
            height={18}
            alt="upvote"
            className="cursor-pointer"
          />
          <div className="flex-center background-light700_dark400 min-w-[18px] rounded-sm p-1">
            <p className="subtle-medium text-dark400_light900">
              {formatAndDivideNumber(upvotes)}
            </p>
          </div>
        </div>

        <div className="flex-center gap-1.5">
          <Image
            src={
              hasdownVoted
                ? "/assets/icons/downvoted.svg"
                : "/assets/icons/downvote.svg"
            }
            width={18}
            height={18}
            alt="downvote"
            className="cursor-pointer"
          />
          <div className="flex-center background-light700_dark400 min-w-[18px] rounded-sm p-1">
            <p className="subtle-medium text-dark400_light900">
              {formatAndDivideNumber(downvotes)}
            </p>
          </div>
        </div>
      </div>
      {/* <div className="mr-2.5 flex items-center">
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
      </div> */}
      <Image
        src={
          hasSaved
            ? "/assets/icons/star-filled.svg"
            : "/assets/icons/star-red.svg"
        }
        width={18}
        height={18}
        alt="star"
        className="cursor-pointer"
      />
    </div>
  );
};

export default Votes;
