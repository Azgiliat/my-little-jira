import { createContext } from 'react';

export const BoardContext = createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  moveTaskFromGroupToGroup: (taskId: string, to: string) => {},
});
