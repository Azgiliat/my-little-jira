import { useEffect } from 'react';

import { DragNDropRef, OnDropHandler } from '@/UI/drag-n-drop/types';

const dropPlaces: Map<DragNDropRef, DOMRect> = new Map();
const dropEndHandlers: Map<DragNDropRef, OnDropHandler> = new Map();
let activeDropPlace: DragNDropRef | null = null;

export function activateDropPlaces() {
  for (const dropPlace of dropPlaces.keys()) {
    dropPlace.current?.classList.add('outline-dashed');
  }
}

export function deactivateDropPlaces() {
  for (const dropPlace of dropPlaces.keys()) {
    dropPlace.current?.classList.remove('outline-dashed');
  }
}

export function runActiveDropPlaceHandler(payload: Record<string, unknown>) {
  if (activeDropPlace) {
    dropEndHandlers.get(activeDropPlace)?.(payload);
  }
}

export function findActiveDropPlace(
  dragItem: DragNDropRef,
  intersectionRatio = 0.6,
) {
  if (!dragItem.current) {
    activeDropPlace = null;
    return activeDropPlace;
  }

  const {
    top: elementTop,
    right: elementRight,
    bottom: elementBottom,
    left: elementLeft,
    width: elementWidth,
    height: elementHeight,
  } = dragItem.current.getBoundingClientRect();

  for (const [key, value] of dropPlaces) {
    const height =
      Math.min(elementBottom, value.bottom) - Math.max(elementTop, value.top);
    const width =
      Math.min(elementRight, value.right) - Math.max(elementLeft, value.left);
    const intersectionSquare = height * width;

    if (
      intersectionSquare > 0 &&
      elementWidth * elementHeight * intersectionRatio <= intersectionSquare
    ) {
      activeDropPlace = key;
      return activeDropPlace;
    }
  }

  activeDropPlace = null;
  return activeDropPlace;
}

export function useDrop(dropPlace: DragNDropRef, onDrop: OnDropHandler) {
  useEffect(() => {
    if (dropPlace.current) {
      dropPlaces.set(dropPlace, dropPlace.current?.getBoundingClientRect());
      dropEndHandlers.set(dropPlace, onDrop);

      return () => {
        dropPlaces.delete(dropPlace);
        dropEndHandlers.delete(dropPlace);
      };
    }
  });
}
