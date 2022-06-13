import { MutableRefObject, useEffect } from 'react';

import { useDragContainers } from '@/UI/drag-n-drop/useDragContainer';
import {
  activateDropPlaces,
  checkIsOverDropPlace,
  deactivateDropPlaces,
} from '@/UI/drag-n-drop/useDrop';

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
  withCopy = false,
) {
  const { containers } = useDragContainers();
  const itemCoords = {
    x: 0,
    y: 0,
  };

  const onMouseUp = (evt: MouseEvent) => {
    evt.preventDefault();
    deactivateDropPlaces();
    containers[dragContainerName].removeEventListener('mousemove', onMouseMove);
  };
  const onMouseDown = (evt: MouseEvent) => {
    evt.preventDefault();
    activateDropPlaces();
    containers[dragContainerName].addEventListener('mousemove', onMouseMove);
  };
  const onMouseMove = (evt: MouseEvent) => {
    if (!dragItem.current) {
      console.warn('Cant move drag item');
      return;
    }
    const availableDelta = needToStopMove(
      dragItem.current,
      containers[dragContainerName],
    );

    if (evt.movementX < 0 && evt.movementX > availableDelta.left) {
      itemCoords.x += evt.movementX;
    }
    if (evt.movementX > 0 && evt.movementX < availableDelta.right) {
      itemCoords.x += evt.movementX;
    }
    if (evt.movementY > 0 && evt.movementY < availableDelta.bottom) {
      itemCoords.y += evt.movementY;
    }
    if (evt.movementY < 0 && evt.movementY > availableDelta.top) {
      itemCoords.y += evt.movementY;
    }

    dragItem.current.style.transform = `translateX(${itemCoords.x}px) translateY(${itemCoords.y}px)`;
    checkIsOverDropPlace(dragItem.current);
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
