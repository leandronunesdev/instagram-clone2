import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducerPosts from "./ducks/posts";
import reducerUser from "./ducks/user";

const createRootReducer = () => combineReducers({
  user: reducerUser,
  posts: reducerPosts
})

const store = createStore(createRootReducer(), composeWithDevTools())

export {store}