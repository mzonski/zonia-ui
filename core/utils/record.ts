export function getRandomValueFromRecord<T>(record: Record<string, T>): T {
  const values = Object.values(record);
  const randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
}
