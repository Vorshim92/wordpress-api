import { combineReducers, configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import postReducer from "./reducers/postReducer";
import postsReducer from "./reducers/postsReducer";

const rootReducer = combineReducers({
  posts: postsReducer,
  post: postReducer,
});

export const store = configureStore({ reducer: rootReducer });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
