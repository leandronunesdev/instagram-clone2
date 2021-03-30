import axios from "axios"
import { useEffect, useState } from "react"

const Stories = () => {

  const [stories, setStories] = useState<any>([])

  useEffect(() => {
    axios.get("http://localhost:4000/stories")
    .then(resposta => setStories(resposta.data))
  }, [])

  return (
    <div className="stories">
      <h2>Stories</h2>
      {
        stories !== undefined &&
        stories.map((item: any) => (
        <div key={item.id} className="storie">
          <div className="storie-image">
            <img src={item.userPicture} alt="user" />
          </div>
          <div className="storie-user">
            <strong>{item.user}</strong>
            <span>{item.time}</span>
          </div>
        </div>
        ))
      }
    </div>
  )
}

export default Stories