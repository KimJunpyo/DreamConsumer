import { naverLogin, kakaoLogin, googleLogin } from './functions';

export const SOCIAL_LOGIN_LIST = [
  { siteName: 'naver', handleClick: naverLogin },
  { siteName: 'kakao', handleClick: kakaoLogin },
  { siteName: 'google', handleClick: googleLogin },
];
