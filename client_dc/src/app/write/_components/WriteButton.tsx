'use client';

import { Button } from '@/components';
import { CLICKED_BUTTON_PROPS, COMMON_BUTTON_PROPS } from '../_util/constants';
import { WriteButtonProps } from '../_util/types';

const WriteButton = ({ children, click, width, height, rounded, handler }: WriteButtonProps) => {
  const buttonProps = click ? CLICKED_BUTTON_PROPS : COMMON_BUTTON_PROPS;
  return (
    <Button {...buttonProps} width={width} height={height} rounded={rounded} handler={handler}>
      {children}
    </Button>
  );
};

export default WriteButton;
