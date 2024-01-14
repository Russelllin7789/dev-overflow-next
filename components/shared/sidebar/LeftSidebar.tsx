"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { sidebarLinks } from "@/constants";

const LeftSidebar = () => {
  const pathname = usePathname();

  return (
    <section className="absolute top-[106px] hidden h-full flex-col gap-6 border-r border-solid px-6 pt-10 sm:flex lg:min-w-[265px]">
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        return (
          <div key={item.route} className="max-lg:max-w-[56px]">
            <Link
              href={item.route}
              className={`${
                isActive
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark300_light900"
              } flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={24}
                height={24}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p
                className={`${
                  isActive ? "base-bold" : "base-medium"
                } max-lg:hidden`}
              >
                {item.label}
              </p>
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default LeftSidebar;
