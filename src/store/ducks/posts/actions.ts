import { action } from "typesafe-actions";
import { PostItem, Posts, PostTypes } from "./types";

export const getPosts = (payload: Posts) => action(PostTypes.GET_POSTS, payload)
export const patchPost = (payload: PostItem) => action(PostTypes.PATCH_POSTS, payload)
export const postPosts = (payload: any) => action(PostTypes.POST_POSTS, payload)