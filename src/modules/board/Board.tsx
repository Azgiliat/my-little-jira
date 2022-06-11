import React, { useContext, useEffect, useMemo, useState } from 'react';

import { LogInContext } from '@/contexts/LogInContext';
import { getBoardForUser } from '@/http/board';
import { Board as BoardType } from '@/http/dto/board';
import { Task, TaskGroup } from '@/http/dto/tasks';
import { getTasksInBord } from '@/http/tasks';
import { TaskGroupsList } from '@/modules/tasks/TaskGroupsList';

export function Board() {
  const loginCtx = useContext(LogInContext);
  const [board, setBoard] = useState<BoardType | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const groupTasks = (tasks: Task[], board: BoardType | null): TaskGroup[] => {
    if (!board) {
      return [];
    }

    return board.taskGroups.map((taskGroupTitle) => ({
      name: taskGroupTitle,
      tasks: tasks.filter((task) => task.taskGroup === taskGroupTitle),
    }));
  };
  const taskGroups = useMemo<TaskGroup[]>(
    () => groupTasks(tasks, board),
    [tasks, board],
  );

  const loadBoardForUser = async (): Promise<BoardType | null> => {
    let response = null;

    if (!loginCtx.user) {
      return response;
    }

    try {
      response = (await getBoardForUser(loginCtx.user.login))[0];
    } catch {
      response = null;
    }

    return response;
  };
  const loadTasksForBoard = async (
    board: BoardType | null,
  ): Promise<Task[]> => {
    let response: Task[] = [];

    if (!board) {
      return response;
    }

    try {
      response = await getTasksInBord(board.title);
    } catch {
      response = [];
    }

    return response;
  };
  const prepareBoard = async () => {
    const board = await loadBoardForUser();
    const tasks = await loadTasksForBoard(board);
    setBoard(board);
    setTasks(tasks);
  };

  useEffect(() => {
    prepareBoard();
  }, []);

  return (
    <div className="flex-grow flex flex-col">
      <h3 className="font-bold">{board?.title || ''}</h3>
      <TaskGroupsList taskGroups={taskGroups} />
    </div>
  );
}