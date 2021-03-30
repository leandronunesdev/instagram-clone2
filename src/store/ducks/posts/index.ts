import { Posts, PostTypes } from "./types";

const initialStatePosts: Posts = {
  arrayPosts: []
}

function reducerPosts(state = initialStatePosts, action: any) {
  switch(action.type) {
    case PostTypes.GET_POSTS:
      return {
        arrayPosts: action.payload
      };
    case PostTypes.LIKE_POST:
      return {
        
      }    
      default:
        return state
  }
}

export default reducerPosts