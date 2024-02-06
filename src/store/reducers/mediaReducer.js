const INITIAL_STATE = {
  media: [],
  filterBy: null,
  currMedia: '',
}

export function mediaReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_MEDIA':
      return {
        ...state,
        media: [...action.media],
      };
      case 'SET_CURR_MEDIA':
        return {
          ...state,
          currMedia: action.currMedia
        }
    case 'SET_FILTER_BY':
      return {
        ...state,
        filterBy: { ...action.filterBy },
      };
    default:
      return state;
  }
}
