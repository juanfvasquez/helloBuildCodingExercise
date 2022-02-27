import { combineReducers } from "redux";

import {userReducer} from './user/reducer'
import {modalReducer} from './modal/reducer'

export const reducers = combineReducers({
  user: userReducer,
  modal: modalReducer,
})