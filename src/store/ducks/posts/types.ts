export enum PostTypes {
  GET_POSTS = 'GET_POSTS',
  PATCH_POSTS = 'PATCH_POSTS',
  POST_POSTS = 'POST_POSTS'
}

export interface PostItem {
  id: number,
  user: string,
  userPicture: string,
  postPicture: string,
  location: string,
  description: string,
  likes: number
}

export interface Posts {
  arrayPosts: PostItem[]
}