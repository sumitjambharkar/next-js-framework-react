import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Page() {

  return (
    <div>
      <h1>Sumit</h1>
      <div className="p-6 max-w-xl mx-auto bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-blue-600">Welcome to Mini Next</h1>
      <p className="mt-4 text-orange-700">This is the home page styled with Tailwind CSS.</p>
    </div>

      <p>
      </p>

      <Link to="/about">About page</Link>
      <br />
      <Link to="/blog">Blog page</Link>
      <br />
      <Link to="/blog/123">Dynamic blog post (id=123)</Link>
      <h1>sumit</h1>
      <h1>pihuiu</h1>
      <h1>sumit</h1>
      <h1>pihuiu</h1>
      <h1>suu</h1>
      <h1>same</h1>
      <h1>Rohan</h1>
      <h1>suu</h1>
    </div>
  );
}
