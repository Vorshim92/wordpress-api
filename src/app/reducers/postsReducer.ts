import { Reducer } from "redux";

export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";

interface MyState {
  postsData: any[];
  loading: boolean;
  error: boolean;
}
interface FetchPostsSuccessAction {
  type: typeof FETCH_POSTS_SUCCESS;
  payload: any;
}

interface FetchPostsFailureAction {
  type: typeof FETCH_POSTS_FAILURE;
}
export type ActionPosts = FetchPostsSuccessAction | FetchPostsFailureAction;

const initialState = {
  postsData: [],
  loading: true,
  error: false,
};

const postsReducer: Reducer<MyState, ActionPosts> = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        postsData: action.payload,
        loading: false,
        error: false,
      };
    case FETCH_POSTS_FAILURE:
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

export default postsReducer;
