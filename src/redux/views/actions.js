import { ADD_VIEWS } from "./types"

export const addView = (number) =>{
  return {
    type:ADD_VIEWS,
    payload: Number(number)
  }
}