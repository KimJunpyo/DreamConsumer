export const generateRange = (start: number, end: number) => {
  if (start > end) return [];

  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  return result;
};
