import { MutableRefObject, useEffect } from 'react';

import { useDragContainers } from '@/UI/drag-n-drop/useDragContainer';

const needToStopMove = (element: HTMLElement, parent: HTMLElement) => {
  const {
    top: elementTop,
    right: elementRight,
    bottom: elementBottom,
    left: elementLeft,
  } = element.getBoundingClientRect();
  const {
    top: parentTop,
    right: parentRight,
    bottom: parentBottom,
    left: parentLeft,
  } = parent.getBoundingClientRect();

  return {
    top: parentTop - elementTop,
    right: parentRight - elementRight,
    bottom: parentBottom - elementBottom,
    left: parentLeft - elementLeft,
  };
};

export function useDrag(
  dragContainerName: string,
  dragItem: MutableRefObject<HTMLElement | null>,
) {
  const { containers } = useDragContainers();
  const itemCoords = {
    x: 0,
    y: 0,
  };

  const onMouseUp = (evt: MouseEvent) => {
    evt.preventDefault();
    containers[dragContainerName].removeEventListener('mousemove', onMouseMove);
  };
  const onMouseDown = (evt: MouseEvent) => {
    evt.preventDefault();
    containers[dragContainerName].addEventListener('mousemove', onMouseMove);
  };
  const onMouseMove = (evt: MouseEvent) => {
    if (!dragItem.current) {
      console.warn('Cant move drag item');
      return;
    }
    const availableDelata = needToStopMove(
      dragItem.current,
      containers[dragContainerName],
    );

    if (evt.movementX < 0 && evt.movementX > availableDelata.left) {
      itemCoords.x += evt.movementX;
    }

    itemCoords.y += evt.movementY;
    dragItem.current.style.transform = `translateX(${itemCoords.x}px) translateY(${itemCoords.y}px)`;
  };

  useEffect(() => {
    if (!dragItem.current) {
      console.warn('Drag item doesnt exist');
      return;
    }

    dragItem.current.addEventListener('mousedown', onMouseDown);
    dragItem.current.addEventListener('mouseup', onMouseUp);

    return () => {
      dragItem.current?.removeEventListener('mousedown', onMouseDown);
      dragItem.current?.removeEventListener('mouseup', onMouseUp);
    };
  });
}
