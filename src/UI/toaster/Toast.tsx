import React, { PropsWithChildren } from 'react';

import { UIElementsType } from '@/UI/UIElementsType';

export type ToastData = {
  type: UIElementsType;
  text: string;
};

export function Toast(props: PropsWithChildren<ToastData>) {
  return (
    <div className="w-full bg-white shadow-xl rounded overflow-hidden">
      <div className={`w-full mb-2 h-4 bg-${props.type}-500`} />
      <p className="p-2">{props.text}</p>
    </div>
  );
}
