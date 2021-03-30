export enum PostTypes {
  GET_POSTS = 'GET_POSTS',
  LIKE_POST = 'LIKE_POST'
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