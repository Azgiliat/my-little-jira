import { useReducer } from 'react';

enum ActionType {
  SetIsLoading,
  SetErrors,
  SetResponse,
}
type IsLoadingPayload = {
  type: ActionType.SetIsLoading;
  payload: boolean;
};
type ErrorsPayload = {
  type: ActionType.SetErrors;
  payload: string[];
};
type ResponseAction<T> = {
  type: ActionType.SetResponse;
  payload: T;
};
type Action<T> = IsLoadingPayload | ErrorsPayload | ResponseAction<T>;
type State<T> = {
  isLoading: boolean;
  errors: string[];
  response: T | null;
};

export function useLoadWithState<T>(loadFunction: () => Promise<T>) {
  const [state, dispatch] = useReducer(
    (state: State<T>, action: Action<T>) => {
      switch (action.type) {
        case ActionType.SetIsLoading:
          return {
            ...state,
            isLoading: action.payload,
          };
        case ActionType.SetErrors:
          return {
            ...state,
            errors: action.payload,
          };
        case ActionType.SetResponse:
          return {
            ...state,
            response: action.payload,
          };
      }
    },
    {
      isLoading: false,
      errors: [],
      response: null,
    },
  );

  const executeRequest = async () => {
    dispatch({
      type: ActionType.SetIsLoading,
      payload: true,
    });

    try {
      dispatch({
        type: ActionType.SetResponse,
        payload: await loadFunction(),
      });
    } catch (err) {
      dispatch({
        type: ActionType.SetErrors,
        payload: [`${err}`],
      });
    } finally {
      dispatch({
        type: ActionType.SetIsLoading,
        payload: false,
      });
    }
  };

  return {
    ...state,
    executeRequest,
  };
}
