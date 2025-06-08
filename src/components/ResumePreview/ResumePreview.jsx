import React from 'react';

export default function ResumePreview() {
  // This will later connect to global state or props
  return (
    <div id="resume-content" className="bg-white p-6 shadow rounded text-left text-sm leading-relaxed min-h-[80vh]">
      <h1 className="text-2xl font-bold">John Doe</h1>
      <p>Email: john@example.com | Phone: +91-1234567890</p>
      <hr className="my-2" />
      <p className="italic">Passionate Frontend Developer with React.js, Tailwind, and JS skills...</p>
    </div>
  );
}
