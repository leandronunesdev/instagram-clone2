import { PostItem, Posts, PostTypes } from "./types";

const initialStatePosts = {
  arrayPosts: []
}

function reducerPosts(state = initialStatePosts, action: any) {

  const posts: any = state.arrayPosts
  
  switch(action.type) {
    case PostTypes.GET_POSTS:
      return {
        arrayPosts: action.payload
      }
    case PostTypes.PATCH_POSTS:
      posts.map((item: PostItem) => {
        if(item.id === action.payload.id) {
          item.likes = action.payload.likes
        }
      })      
      return {
        arrayPosts: posts               
      }  
      case PostTypes.POST_POSTS:
        posts.push(action.payload)  
        return {
          arrayPosts: posts
        }
      default:
        return state
  }
}

export default reducerPosts