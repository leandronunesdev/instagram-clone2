import axios from "axios"
import React, { useEffect } from "react"
import { FiHeart } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"
import { getPosts, patchPost } from "../../store/ducks/posts/actions"
import { PostItem } from "../../store/ducks/posts/types"
import Form from "../Form"

const PostContainer = () => {

  const dispatch = useDispatch()

  const {arrayPosts} = useSelector((state: any) => state.posts)

  useEffect(() => {
    axios.get("http://localhost:4000/posts")
    .then(resposta => dispatch(getPosts(resposta.data)))
  }, [])

  const likePost = (item: PostItem) => {

    const addLike = {
      likes: item.likes + 1
    }

    axios.patch(`http://localhost:4000/posts/${item.id}`, addLike)
    .then(resposta => dispatch(patchPost(resposta.data)))    
  }

  
  return (
    <div className="post-container">
    <Form />
    {
      arrayPosts !== undefined &&
      arrayPosts.map((item: PostItem) => (
      <div key={item.id} className="post">
        <header>
          <img src={item.userPicture} alt={item.user} />
          <div className="post-user">
            <strong>{item.user}</strong>
            <span>{item.location}</span>
          </div>
        </header>
        <div className="post-image">
          <img src={item.postPicture} alt="post" />
        </div>
        <div className="post-likes">
         <FiHeart onClick={() => likePost(item)} /> {item.likes}
        </div>
        <p>{item.description}</p>
      </div>
      ))
    }
  </div>
  )
}

export default PostContainer