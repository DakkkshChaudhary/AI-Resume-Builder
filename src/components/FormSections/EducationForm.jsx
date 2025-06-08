import React, { useState } from 'react';

export default function EducationForm() {
  const [education, setEducation] = useState([{ degree: '', school: '', year: '' }]);

  const handleChange = (index, e) => {
    const updated = [...education];
    updated[index][e.target.name] = e.target.value;
    setEducation(updated);
  };

  const addField = () => setEducation([...education, { degree: '', school: '', year: '' }]);

  return (
    <div className="p-4 border rounded">
      <h2 className="font-semibold mb-2">Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="space-y-2">
          <input name="degree" value={edu.degree} onChange={(e) => handleChange(index, e)} placeholder="Degree" className="w-full border p-1 rounded" />
          <input name="school" value={edu.school} onChange={(e) => handleChange(index, e)} placeholder="School" className="w-full border p-1 rounded" />
          <input name="year" value={edu.year} onChange={(e) => handleChange(index, e)} placeholder="Year" className="w-full border p-1 rounded" />
        </div>
      ))}
      <button className="text-blue-600 mt-2" onClick={addField}>+ Add Education</button>
    </div>
  );
}
