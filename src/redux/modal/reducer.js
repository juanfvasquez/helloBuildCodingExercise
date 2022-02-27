import {SHOW_MODAL} from "./types"

const INITAL_STATE = {
  showModal: false
}

export const modalReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        showModal: action.payload
      }
    default:
      return state
  }
}