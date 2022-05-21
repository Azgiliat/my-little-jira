import React, { PropsWithChildren } from 'react';

import { UIElementsType } from '@/UI/UIElementsType';

export function BaseButton({
  onClick,
  children,
  type,
  className,
}: PropsWithChildren<{
  onClick?: () => void;
  type: UIElementsType;
  className?: string;
}>) {
  const clickHandler = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={clickHandler}
      className={`base-button base-button--${type} ${className || ''}`}
      type="button"
    >
      {children}
    </button>
  );
}
