import React from 'react';

export default function ThemeSwitcher() {
  // Can toggle a CSS class or Tailwind theme
  return (
    <div className="mb-4">
      <label className="mr-2">Theme:</label>
      <select className="p-1 border rounded">
        <option>Classic</option>
        <option>Modern</option>
        <option>Elegant</option>
      </select>
    </div>
  );
}
