"use client";

import { useRouter } from "next/navigation";

export default function ProjectNav({ projectArray, slug }) {
  const router = useRouter();

  const currentIndex = projectArray.findIndex((item) => item.slug === slug);
  const prevObject = projectArray[currentIndex - 1];
  const nextObject = projectArray[currentIndex + 1];

  return (
    <>
      <div className="relative flex justify-between w-full text-2xl my-4">
        {prevObject && (
          <div
            className="link previous absolute left link hover:underline"
            onClick={() => router.push(`/work/${prevObject.slug}`)}
          >
            Previous Project
          </div>
        )}

        {nextObject && (
          <div
            className="link next absolute right-0 link hover:underline"
            onClick={() => router.push(`/work/${nextObject.slug}`)}
          >
            Next Project
          </div>
        )}
      </div>
    </>
  );
}
