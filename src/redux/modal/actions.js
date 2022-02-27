import { SHOW_MODAL } from "./types"

export const showModal = show => ({
  type: SHOW_MODAL,
  payload: show
})