import React from "react";

export default function Page() {

  return (
    <div>
      <div className="p-6 max-w-xl mx-auto bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-blue-600">Welcome to Mini Next</h1>
      <p className="mt-4 text-orange-700">This is the home page styled with Tailwind CSS.</p>
    </div>

      <p>
      </p>

      <a href="/about">About page</a>
      <br />
      <a href="/blog">Blog page</a>
      <br />
      <a href="/blog/123">Dynamic blog post (id=123)</a>
    </div>
  );
}
