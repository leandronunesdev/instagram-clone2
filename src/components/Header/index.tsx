import axios from "axios";
import React, { useEffect } from "react";
import { FiUser } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../images/logo-instagram.png"
import { getUser } from "../../store/ducks/user/actions";

const Header = () => {

  const dispatch = useDispatch()

  const user = useSelector((state: any) => state.user)
  
  useEffect(() => {
    axios.get("http://localhost:4000/user")
    .then(resposta => dispatch(getUser(resposta.data)))
  }, [])
  
  return (
    <div className="header">
        <header>
          <img src={Logo} alt="Logo Instagram" />
          <div className="top-info"> 
            <span>
              <FiUser />
              {user.name}
            </span>
          </div>
        </header>
      </div>
  )
}

export default Header