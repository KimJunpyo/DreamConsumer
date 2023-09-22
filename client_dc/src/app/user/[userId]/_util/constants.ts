import { bronze, silver, gold, diamond, emerald, ruby } from '~/image/rating';

export const RATINGS = {
  bronze: '브론즈',
  silver: '실버',
  gold: '골드',
  diamond: '다이아',
  emerald: '에메랄드',
  ruby: '루비',
};

export const RATING_LIST = [
  { image: bronze, ratingName: RATINGS.bronze, width: 26 },
  { image: silver, ratingName: RATINGS.silver, width: 26 },
  { image: gold, ratingName: RATINGS.gold, width: 26 },
  { image: diamond, ratingName: RATINGS.diamond, width: 22 },
  { image: emerald, ratingName: RATINGS.emerald, width: 28 },
  { image: ruby, ratingName: RATINGS.ruby, width: 28 },
];
