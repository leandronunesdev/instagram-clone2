import { useSelector } from "react-redux"

const UserInfo = () => {

  const user = useSelector((state: any) => state.user)

  return (
    <div className="user-info">
    <img
      alt="Perfil"
      src={user.userPicture}
    />
    <div className="user-bio">
      <strong>{user.name}</strong>
      <span>{user.username}</span>
    </div>
  </div>
  )
}

export default UserInfo