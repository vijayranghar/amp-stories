import { SELECT_STORY } from '../actions'

const initialState = {
  selectedStoryID: null
}

export default (state=initialState, action) => {
  switch(action.type) {
    case SELECT_STORY:
      return { ...state, selectedStoryID : action.id }
     default:
       return state 
  }
}