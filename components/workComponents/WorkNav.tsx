"use client";

import { useRouter } from "next/navigation";

export default function WorkNav({ workArray, slug }) {
  const router = useRouter();

  const currentIndex = workArray.findIndex((obj) => obj.slug === slug);
  const prevObject = workArray[currentIndex - 1];
  const nextObject = workArray[currentIndex + 1];

  return (
    <>
      <div className="work__nav">
        {prevObject && (
          <div
            className="work__nav-link previous link"
            onClick={() => router.push(`/work/${prevObject.slug}`)}
          >
            Previous
          </div>
        )}

        {nextObject && (
          <div
            className="work__nav-link next link"
            onClick={() => router.push(`/work/${nextObject.slug}`)}
          >
            Next
          </div>
        )}
      </div>
    </>
  );
}
