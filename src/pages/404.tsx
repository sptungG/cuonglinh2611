import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-amber-600 dark:text-amber-500 lg:text-9xl">404</h1>
          <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">{`Something's missing.`}</p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            {`Sorry, we can't find that page. You'll find lots to explore on the home page.`}
          </p>
          <Link
            href="/c"
            className="my-4 inline-flex rounded-lg bg-amber-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-amber-800 focus:outline-none focus:ring-4 focus:ring-amber-300 dark:focus:ring-amber-900"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Page;
