// NON E' UNA VERA ACTION
import { baseApiUrl } from "../endpoints";

export const deletePost = async (id: number) => {
  try {
    const username = "admin";
    const password = "atP0 Etwt yaNL XSVR UVFf Ng6w";
    const token = btoa(`${username}:${password}`);
    const headers = {
      Authorization: `Basic ${token}`,
    };

    const response = await fetch(`${baseApiUrl}/posts/${id}`, {
      method: "DELETE",
      headers: headers,
    });
    if (response.ok) {
    } else {
      //   dispatch(fetchPostFailure());
      throw new Error("Failed to fetch posts");
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};
