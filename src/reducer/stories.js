import { SELECT_STORY } from '../actions'

const initialState = {
  selectedStoryID: null,
  storiesList: [],
}

export default (state=initialState, action) => {
  const { selectedStoryID} = action
  switch(action.type) {
    case SELECT_STORY:
      return { ...state, selectedStoryID, storiesList:[...state.storiesList, selectedStoryID] }
    default:
      return state 
  }
}