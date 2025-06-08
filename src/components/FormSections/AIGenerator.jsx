import React, { useState } from 'react';
import { getBulletPoints } from '../../utils/openaiAPI';

export default function AIGenerator() {
  const [jobRole, setJobRole] = useState('');
  const [skills, setSkills] = useState('');
  const [bullets, setBullets] = useState([]);

  const handleGenerate = async () => {
    const result = await getBulletPoints(jobRole, skills.split(','));
    setBullets(result.split('\n').filter(Boolean));
  };

  return (
    <div className="p-4 border rounded">
      <h2 className="font-semibold mb-2">AI Bullet Point Generator</h2>
      <input className="w-full p-1 mb-2 border rounded" value={jobRole} onChange={(e) => setJobRole(e.target.value)} placeholder="Job Role (e.g., Frontend Developer)" />
      <input className="w-full p-1 mb-2 border rounded" value={skills} onChange={(e) => setSkills(e.target.value)} placeholder="Skills (comma separated)" />
      <button className="bg-blue-600 text-white px-3 py-1 rounded" onClick={handleGenerate}>Generate</button>
      <ul className="mt-2 list-disc list-inside text-sm">
        {bullets.map((point, idx) => <li key={idx}>{point}</li>)}
      </ul>
    </div>
  );
}
