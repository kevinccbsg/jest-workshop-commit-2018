
export default async () => {
  const response = await fetch('http://localhost:3001/notes');
  const notes = await response.json();
  return notes;
};
