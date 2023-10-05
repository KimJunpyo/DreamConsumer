import { atom } from 'recoil';

export const writeDropdownRadio = atom({
  key: 'writeDropdown',
  default: 'Daily',
});

export const mainEditState = atom({
  key: 'mainEditState',
  default: false,
});

export const dustbinEditState = atom({
  key: 'dustbinEditState',
  default: false,
});

export const modalState = atom({
  key: 'modalState',
  default: false,
});

export const detailState = atom({
  key: 'detailState',
  default: '',
});
