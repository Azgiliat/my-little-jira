import React from 'react';
import { createPortal } from 'react-dom';

import { Toast } from '@/UI/toaster/Toast';
import { useToasterContext } from '@/contexts/ToasterContext';

const toasterContainer = document.getElementById('toaster-container');

export function Toaster() {
  const { notifications } = useToasterContext();
  return createPortal(
    <div className="w-80 p-5 absolute right-0 bottom-0">
      {notifications.map((notification) => (
        <Toast
          key={notification.id}
          type={notification.type}
          text={notification.message}
        />
      ))}
    </div>,
    // TODO remove eslint disable
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    toasterContainer!,
  );
}
