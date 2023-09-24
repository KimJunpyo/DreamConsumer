'use client';

import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Label = ({ children }: Props) => {
  return <label className='font-neb text-grey-text text-xl'>{children}</label>;
};

export default Label;
