import { EDIT_TEXT } from '../actions'

// const indianCuisineTextOne = (<p className="text-1">
const indianCuisine = {
  text1: '<p class="text-1"> Polabooks Press </p>',
  text2: '<p class="text-2"> THE CUISINE: INDIAN </p>',
  text3: '<p class="text-3"> IMPORTANT TIPS AND MOUTH-WATERING RECIPES</p>',
  text4: '<p class="text-4">RUFUS PALMERSTON</p>'
}

let initialState = {
  indianCuisine,
}

export default (state=initialState, action) => {
  const { field, value, template } = action.payload || {}
  switch(action.type) {
    case EDIT_TEXT:
      return {...state, [template]: { ...state[template], [field]: value } }
    default:
        return state
  }
}