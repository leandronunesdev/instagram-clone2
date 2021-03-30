import { action } from "typesafe-actions";
import { Posts, PostTypes } from "./types";

export const getPosts = (payload: Posts) => action(PostTypes.GET_POSTS, payload)