import SocialButton from './SocialButton';
import { SOCIAL_LOGIN_LIST } from '../_util/constants';

export default function SocialLogin() {
  return (
    <section className='flex flex-col items-center mt-5'>
      <div className='pb-3 flex justify-center gap-6'>
        {SOCIAL_LOGIN_LIST.map((social) => (
          <SocialButton key={social.siteName} site={social.siteName} handler={social.handleClick} />
        ))}
      </div>
      <p className='font-nr text-xs text-grey-text'>소셜 계정으로 로그인</p>
    </section>
  );
}
