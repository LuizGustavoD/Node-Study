

export async function getModules() {
  const response = await fetch('http://localhost:3000/modules');
  const data = await response.json();
  return data;
}