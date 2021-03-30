import { User, UserTypes } from "./types"

const initialStateUser: User = {
  name: '',
  username: '',
  userPicture: ''
}

function reducerUser(state = initialStateUser, action: any) {
  switch(action.type) {
    case UserTypes.GET_USER:
      return {
        name: action.payload.name,
        username: action.payload.username,
        userPicture: action.payload.userPicture
      }
      default:
        return state
  }
}

export default reducerUser