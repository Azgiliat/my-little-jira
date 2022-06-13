import { MutableRefObject, useEffect } from 'react';

const dropPlacesMap: Map<MutableRefObject<HTMLElement>, DOMRect> = new Map();

export function activateDropPlaces() {
  for (const dropPlace of dropPlacesMap.keys()) {
    dropPlace.current.classList.add('outline-dashed');
  }
}

export function deactivateDropPlaces() {
  for (const dropPlace of dropPlacesMap.keys()) {
    dropPlace.current.classList.remove('outline-dashed');
  }
}

export function checkIsOverDropPlace(
  dragItem: HTMLElement,
  intersectionRatio = 0.6,
) {
  const {
    top: elementTop,
    right: elementRight,
    bottom: elementBottom,
    left: elementLeft,
    width: elementWidth,
    height: elementHeight,
  } = dragItem.getBoundingClientRect();
  dropPlacesMap.forEach((value, key) => {
    const height =
      Math.min(elementBottom, value.bottom) - Math.max(elementTop, value.top);
    const width =
      Math.min(elementRight, value.right) - Math.max(elementLeft, value.left);
    const intersectionSquare = height * width;

    if (
      intersectionSquare > 0 &&
      elementWidth * elementHeight * intersectionRatio <= intersectionSquare
    ) {
      console.log('over drop place');
    }
  });
}

export function useDrop(dropPlace: MutableRefObject<HTMLElement>) {
  useEffect(() => {
    dropPlacesMap.set(dropPlace, dropPlace.current.getBoundingClientRect());

    return () => {
      dropPlacesMap.delete(dropPlace);
    };
  });
}
