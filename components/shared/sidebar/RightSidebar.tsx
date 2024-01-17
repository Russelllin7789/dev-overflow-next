import React from "react";
import Link from "next/link";
import Image from "next/image";

const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 h-screen flex-col overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none xl:w-[330px]">
      <div>
        <h3 className="h3-bold text-dark300_light900 mb-[26px]">Hot Network</h3>
        <ul className="flex flex-col gap-[30px]">
          <li>
            <Link href="/" className="flex items-center justify-between">
              <p className="body-medium text-dark300_light900">
                Would it be appropriate to point out an error in another paper
                during a referee report?
              </p>
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="right arrow"
                width={20}
                height={20}
              />
            </Link>
          </li>
          <li>
            <Link href="/" className="flex items-center justify-between">
              <p className="body-medium text-dark300_light900">
                Would it be appropriate to point out an error in another paper
                during a referee report?
              </p>
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="right arrow"
                width={20}
                height={20}
              />
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="h3-bold text-dark300_light900 mb-[26px]">
          Popular Tags
        </h3>
        <ul className="flex flex-col gap-[30px]">
          <li>
            <Link href="/" className="flex items-center justify-between">
              <p className="btn text-light400_light500 subtle-medium rounded-[6px] px-4 py-2">
                JAVASCRIPT
              </p>
              <p className="body-medium text-dark300_light900 small-medium">
                20152+
              </p>
            </Link>
          </li>
          <li>
            <Link href="/" className="flex items-center justify-between">
              <p className="btn text-light400_light500 subtle-medium rounded-[6px] px-4 py-2">
                JAVASCRIPT
              </p>
              <p className="body-medium text-dark300_light900 small-medium">
                20152+
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default RightSidebar;
