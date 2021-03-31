import axios from "axios";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postPosts } from "../../store/ducks/posts/actions";

const Form  = () => {

  const dispatch = useDispatch()

  const inputPostPicture = useRef<HTMLInputElement>(null)
  const inputDescription = useRef<HTMLInputElement>(null)

  const user = useSelector((state: any) => state.user)

  const enviarPost = () => {

    const requisicao = {
      postPicture: inputPostPicture.current?.value,
      description: inputDescription.current?.value,
      user: user.username,
      userPicture: user.userPicture,
      likes: 0
    }

    axios.post("http://localhost:4000/posts", requisicao)
    .then(resposta => dispatch(postPosts(resposta.data)))
  }  

  return (
      <div className="form">
        <p>Faça uma postagem aqui</p>
        <input type="text" placeholder="Cole a url da imagem" ref={inputPostPicture}/>
        <input type="text" placeholder="Digite uma descrição" ref={inputDescription}/>
        <button onClick={enviarPost}>Postar!</button>
      </div>
  );
}

export default Form