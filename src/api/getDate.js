
export default async () => {
  const response = await fetch('http://worldclockapi.com/api/json/est/now');
  const date = await response.json();
  return date;
};
