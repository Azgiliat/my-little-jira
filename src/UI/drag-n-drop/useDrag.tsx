import { MutableRefObject, useEffect } from 'react';

import { useDragContainers } from '@/UI/drag-n-drop/useDragContainer';

export function useDrag(
  dragContainerName: string,
  dragItem: MutableRefObject<HTMLElement | null>,
) {
  const itemCoords = {
    x: 0,
    y: 0,
  };
  const { containers } = useDragContainers();
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

    itemCoords.x += evt.movementX;
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
