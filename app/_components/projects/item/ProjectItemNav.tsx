"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface ProjectNavProps {
  projectArray: Array<{ slug: string }>;
  slug: string;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function ProjectNav({ projectArray, slug }: ProjectNavProps) {
  const router = useRouter();

  const currentIndex = projectArray.findIndex((item) => item.slug === slug);
  const prevObject = projectArray[currentIndex - 1];
  const nextObject = projectArray[currentIndex + 1];

  const handleNavigation = async (targetSlug: string) => {
    const body = document.querySelector("body");
    body?.classList.add("page-transition");

    await sleep(500);
    router.push(`/projects/${targetSlug}`);
    await sleep(500);

    body?.classList.remove("page-transition");
  };

  return (
    <div className="relative flex justify-between w-full text-2xl my-4">
      {prevObject && (
        <div
          className="link previous absolute left link hover:underline"
          onClick={() => handleNavigation(prevObject.slug)}
        >
          Previous Project
        </div>
      )}

      {nextObject && (
        <div
          className="link next absolute right-0 link hover:underline"
          onClick={() => handleNavigation(nextObject.slug)}
        >
          Next Project
        </div>
      )}
    </div>
  );
}
