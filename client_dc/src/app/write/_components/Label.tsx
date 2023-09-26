'use client';

import { LabelProps } from '../_util/types';

const Label = ({ children }: LabelProps) => {
  return <label className='font-neb text-grey-text text-xl'>{children}</label>;
};

export default Label;
