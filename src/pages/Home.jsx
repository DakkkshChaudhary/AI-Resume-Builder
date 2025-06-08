import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold">AI Resume Builder</h1>
      <p className="text-lg mt-4">Generate stunning resumes with smart suggestions</p>
      <Link to="/builder">
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded">Start Building</button>
      </Link>
    </div>
  );
}
