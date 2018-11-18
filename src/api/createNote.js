
export default async (title, description) => {
  const response = await fetch('http://localhost:3001/note', {
    method: 'post',
    body: JSON.stringify({ title, description }),
    headers: { 'Content-Type': 'application/json' },
  });
  const notes = await response.json();
  return notes;
};