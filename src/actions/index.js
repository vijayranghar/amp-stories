export const SELECT_STORY = 'SELECT_STORY'


export const selectStory = (selectedStoryID) => ({
  type: SELECT_STORY,
  selectedStoryID,
})