import axios from 'axios';

export const getBulletPoints = async (jobRole, skills) => {
  const prompt = `Create 3 professional resume bullet points for a ${jobRole} with skills in ${skills.join(', ')}`;

  const response = await axios.post('https://api.openai.com/v1/completions', {
    model: 'text-davinci-003',
    prompt,
    temperature: 0.6,
    max_tokens: 150
  }, {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
    }
  });

  return response.data.choices[0].text.trim();
};
