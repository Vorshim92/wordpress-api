import { FETCH_POST_FAILURE, FETCH_POST_SUCCESS } from "../reducers/postsReducer";
import { baseApiUrl } from "../endpoints";
import { Action } from "../reducers/postsReducer";

const fetchPostSuccess = (data: any): Action => ({
  type: FETCH_POST_SUCCESS,
  payload: data,
});
const fetchPostFailure = (): Action => ({
  type: FETCH_POST_FAILURE,
});

export const fetchPosts = async (dispatch: (action: Action) => void) => {
  try {
    const username = "admin";
    const password = "atP0 Etwt yaNL XSVR UVFf Ng6w";
    const token = btoa(`${username}:${password}`);
    const headers = {
      Authorization: `Basic ${token}`,
    };

    const response = await fetch(`${baseApiUrl}/posts?_embed`, {
      headers: headers,
    });
    if (response.ok) {
      const data = await response.json();
      dispatch(fetchPostSuccess(data));
    } else {
      dispatch(fetchPostFailure());
      throw new Error("Failed to fetch posts");
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};
