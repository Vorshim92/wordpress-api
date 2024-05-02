import { Reducer } from "redux";
import { Post } from "../../components/BlogPost/BlogPost";
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
export const FETCH_POST_FAILURE = "FETCH_POST_FAILURE";

interface MyState {
  postData: any;
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
export type ActionPost = FetchPostSuccessAction | FetchPostFailureAction;

const initialState = {
  postData: null,
  loading: true,
  error: false,
};

const postReducer: Reducer<MyState, ActionPost> = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        postData: action.payload,
        loading: false,
        error: false,
      };
    case FETCH_POST_FAILURE:
      return {
        ...state,
        postData: [],
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default postReducer;
