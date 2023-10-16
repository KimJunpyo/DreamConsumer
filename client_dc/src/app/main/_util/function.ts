export const tagsSmallColor = (index: number) => {
  switch (index % 3) {
    case 0:
      return 'redSmall';
    case 1:
      return 'greenSmall';
    case 2:
      return 'purpleSmall';
    default:
      return 'redSmall';
  }
};
