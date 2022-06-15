import { MutableRefObject } from 'react';

export type DragNDropRef = MutableRefObject<HTMLElement | null>;
export type DragPayload = Record<string, unknown>;
export type OnDropHandler = (payload: Record<string, unknown>) => void;
