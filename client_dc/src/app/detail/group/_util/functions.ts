export const getPercentColor = (percent: number) => {
  if (percent < 34) return '#85daff';
  else if (percent < 67) return '#ffaa85';
  else return '#ff8585';
};

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
