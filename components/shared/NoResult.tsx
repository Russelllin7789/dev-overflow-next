import Image from "next/image";
import React from "react";

const NoResult = () => {
  return (
    <div className="flex-center mt-10 w-full flex-col">
      <Image
        src="/assets/images/light-illustration.png"
        alt="No result illustration"
        width={270}
        height={200}
        className="block object-contain dark:hidden"
      />
      <Image
        src="/assets/images/dark-illustration.png"
        alt="No result illustration"
        width={270}
        height={200}
        className="hidden object-contain dark:flex"
      />
    </div>
  );
};

export default NoResult;
