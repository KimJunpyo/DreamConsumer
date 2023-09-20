export const SIGN_UP_INPUT_LIST = [
  { inputName: 'email', inputType: 'text', label: '이메일' },
  { inputName: 'password', inputType: 'password', label: '비밀번호' },
  { inputName: 'confirmPassword', inputType: 'password', label: '비밀번호 확인' },
  { inputName: 'userName', inputType: 'text', label: '이름' },
];

export const SIGN_UP_ERROR_MESSAGE = {
  EMAIL: '* 이메일 형식이 아닙니다.',
  PASSWORD: '* 소문자, 특수문자, 숫자를 각각 1개 이상 포함하여 8자 이상이어야 합니다.',
  COFIRM_PASSWORD: '* 비밀번호가 일치하지 않습니다.',
  NAME: '* 2자 이상, 한글과 영문만 입력 가능합니다.',
  JOB: '* 필수 항목입니다.',
  AGE: '* 필수 항목입니다.',
  PERSONAL_INFO_CONSENT: '* 필수 동의 항목입니다.',
};

export const JOB_LIST = ['학생', '회사원', '프리랜서', '무직'];
