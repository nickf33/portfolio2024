"use client";

import { useRouter } from "next/navigation";

export default function WorkNav({ workArray, slug }) {
  const router = useRouter();

  const currentIndex = workArray.findIndex((item) => item.slug === slug);
  const prevObject = workArray[currentIndex - 1];
  const nextObject = workArray[currentIndex + 1];

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
