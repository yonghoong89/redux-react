import { ADD_VIEWS } from "./types"

const initialState = {
  count:0,
}

const viewsReducer = (state = initialState, action) =>{
    switch(action.type){
      case ADD_VIEWS:
        return {
          ...state,
          count: state.count + action.payload
        }
      default: return state
    }
}

export default viewsReducer