import { FetchUrl } from "./constants";
import { apiRequest } from "./fetchData";

export const checkCommentOwner = async ({ postId, commentId }) => {
  try {
    const checkData = await apiRequest({
      url: `${FetchUrl.posts}/${postId}/comments/checkOwner`,
      method: "POST",
      body: {
        comment_id: commentId,
      },
    });

    return checkData;
  } catch (error) {
  }
};

export const checkPostOwner = async (postId) => {
  try {
    const checkData = await apiRequest({
      url: FetchUrl.checkPostOwner,
      method: "POST",
      body: { post_id: postId },
    });
    return checkData;
  } catch (error) {
  }
};
