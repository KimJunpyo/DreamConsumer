export const getFontSize = (length: number) => {
  if (length < 6) return 'text-4xl';
  else if (length < 8) return 'text-3xl';
  else return 'text-xl';
};
