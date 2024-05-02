import { FETCH_POSTS_FAILURE, FETCH_POSTS_SUCCESS } from "../reducers/postsReducer";
import { FETCH_POST_FAILURE, FETCH_POST_SUCCESS } from "../reducers/postReducer";
import { baseApiUrl } from "../endpoints";
import { ActionPosts } from "../reducers/postsReducer";
import { ActionPost } from "../reducers/postReducer";

const fetchPostsSuccess = (data: any): ActionPosts => ({
  type: FETCH_POSTS_SUCCESS,
  payload: data,
});
const fetchPostsFailure = (): ActionPosts => ({
  type: FETCH_POSTS_FAILURE,
});
const fetchPostSuccess = (data: any): ActionPost => ({
  type: FETCH_POST_SUCCESS,
  payload: data,
});
const fetchPostFailure = (): ActionPost => ({
  type: FETCH_POST_FAILURE,
});

export const fetchPosts = async (dispatch: (action: ActionPosts) => void) => {
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
      dispatch(fetchPostsSuccess(data));
    } else {
      dispatch(fetchPostsFailure());
      throw new Error("Failed to fetch posts");
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

export const fetchPost = (postId: string) => async (dispatch: (action: ActionPost) => void) => {
  try {
    const username = "admin";
    const password = "atP0 Etwt yaNL XSVR UVFf Ng6w";
    const token = btoa(`${username}:${password}`);
    const headers = {
      Authorization: `Basic ${token}`,
    };

    const response = await fetch(`${baseApiUrl}/posts/${postId}?_embed=1`, {
      headers: headers,
    });
    if (response.ok) {
      const data = await response.json();
      dispatch(fetchPostSuccess(data));
    } else {
      dispatch(fetchPostFailure());
      throw new Error("Failed to fetch post");
    }
  } catch (error) {
    console.error("Error fetching post:", error);
  }
};
