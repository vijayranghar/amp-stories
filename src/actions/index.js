export const SELECT_STORY = 'SELECT_STORY'
export const EDIT_TEXT = 'EDIT_TEXT'

export const selectStory = (selectedStoryID) => ({
  type: SELECT_STORY,
  selectedStoryID,
})

export const editText = (fieldDetails) => ({
  type: EDIT_TEXT,
  payload: fieldDetails,
})