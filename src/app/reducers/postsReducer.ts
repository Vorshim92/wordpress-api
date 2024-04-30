import { Reducer } from "redux";
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
export const FETCH_POST_FAILURE = "FETCH_POST_FAILURE";

interface MyState {
  postsData: any[];
  loading: boolean;
  error: boolean;
}
interface FetchPostSuccessAction {
  type: typeof FETCH_POST_SUCCESS;
  payload: any;
}

interface FetchPostFailureAction {
  type: typeof FETCH_POST_FAILURE;
}
export type Action = FetchPostSuccessAction | FetchPostFailureAction;

const initialState = {
  postsData: [],
  loading: true,
  error: false,
};

const postReducer: Reducer<MyState, Action> = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        postsData: action.payload,
        loading: false,
        error: false,
      };
    case FETCH_POST_FAILURE:
      return {
        ...state,
        postsData: [],
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default postReducer;
