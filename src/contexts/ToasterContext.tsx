import { nanoid } from 'nanoid';
import React, {
  useContext,
  createContext,
  PropsWithChildren,
  useState,
} from 'react';

import { UIElementsType } from '@/UI/UIElementsType';

export type Notification = {
  type: UIElementsType;
  message: string;
  needConfirmation?: boolean;
};
export type NotificationWithId = Notification & { id: string };
export type ToasterContext = NotificationWithId[];
export type ChangeToasterContext = {
  addNotification: (notification: Notification) => void;
  removeNotification: (notification: NotificationWithId) => void;
};

export const ToasterContext = createContext<ToasterContext>([]);
export const ToasterDispatchContext =
  createContext<ChangeToasterContext | null>(null);

export function ToasterContextProvider(props: PropsWithChildren) {
  const [toasterState, setToasterState] = useState<ToasterContext>([]);
  const removeNotification = (notificationFromState: NotificationWithId) => {
    setToasterState((prevState) =>
      prevState.filter(
        (notification) => notification.id !== notificationFromState.id,
      ),
    );
  };
  const addNotification = (notification: Notification) => {
    setToasterState((prevState) => {
      const id = nanoid();
      if (!notification.needConfirmation) {
        setTimeout(() => {
          setToasterState((prevState) =>
            prevState.filter((notification) => notification.id !== id),
          );
        }, 3000);
      }

      return [...prevState, { ...notification, id }];
    });
  };

  return (
    <ToasterContext.Provider value={toasterState}>
      <ToasterDispatchContext.Provider
        value={{
          addNotification,
          removeNotification,
        }}
      >
        {props.children}
      </ToasterDispatchContext.Provider>
    </ToasterContext.Provider>
  );
}

export function useToasterContext() {
  const dispatchCtx = useContext(ToasterDispatchContext);
  const toastsCtx = useContext(ToasterContext);

  if (dispatchCtx === null) {
    throw new Error('ToasterDispatchContext is null');
  }

  return {
    addNotification: dispatchCtx.addNotification,
    removeNotification: dispatchCtx.removeNotification,
    notifications: toastsCtx,
  };
}
