import { Board } from '@/http/dto/board';
import { BOARDS } from '@/mocks/boards';

export const getBoardForUser = (userLogin: string): Promise<Board[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(BOARDS.filter((board) => board.users.includes(userLogin)));
    }, 2000);
  });
};
