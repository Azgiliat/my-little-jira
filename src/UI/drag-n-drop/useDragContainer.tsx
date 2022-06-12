import { MutableRefObject, useEffect } from 'react';

const containers: Record<string, HTMLElement> = {};

export function useDragContainers() {
  return { containers };
}

export function useDragContainer(
  name: string,
  container: MutableRefObject<HTMLElement | null>,
) {
  const unregisterDragContainer = () => {
    delete containers[name];
  };
  const registerContainer = () => {
    useEffect(() => {
      if (!container.current) {
        console.warn('Container element is null');
        return;
      }

      containers[name] = container.current;

      return unregisterDragContainer;
    }, []);
  };

  return {
    registerContainer,
    unregisterDragContainer,
  };
}
