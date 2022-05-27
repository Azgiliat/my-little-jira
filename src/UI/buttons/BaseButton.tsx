import React, { PropsWithChildren } from 'react';

import { UIElementsType } from '@/UI/UIElementsType';

export function BaseButton({
  onClick,
  children,
  type,
  className,
  disabled,
}: PropsWithChildren<{
  onClick?: () => void;
  type: UIElementsType;
  className?: string;
  disabled?: boolean;
}>) {
  const clickHandler = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      disabled={disabled}
      onClick={clickHandler}
      className={`base-button base-button--${type} ${className || ''}`}
      type="button"
    >
      {children}
    </button>
  );
}
