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

export const mainCheckState = atom<number[]>({
  key: 'mainCheckState',
  default: [],
});

export const dustbinCheckState = atom<number[]>({
  key: 'dustbinCheckState',
  default: [],
});
