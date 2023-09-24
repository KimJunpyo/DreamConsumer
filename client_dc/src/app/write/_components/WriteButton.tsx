'use client';

import { Button } from '@/components';
import { CLICKED_BUTTON_PROPS, COMMON_BUTTON_PROPS } from '../_util/constants';

type Props = {
  children: string;
  click: boolean;
  width: string;
  height: string;
  rounded?: string;
  icon?: string;
  handler: () => void;
};

const WriteButton = ({ children, click, width, height, rounded, handler }: Props) => {
  const buttonProps = click ? CLICKED_BUTTON_PROPS : COMMON_BUTTON_PROPS;
  return (
    <Button {...buttonProps} width={width} height={height} rounded={rounded} handler={handler}>
      {children}
    </Button>
  );
};

export default WriteButton;
