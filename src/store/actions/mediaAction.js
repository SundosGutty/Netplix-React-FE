import { mediaService } from '../../services/media-service';

export function loadMedia() {
  return async (dispatch, getState) => {
    const { filterBy } = getState().mediaModule;
    try {
      const media = await mediaService.query(filterBy);
      dispatch({ type: 'SET_MEDIA', media });
    } catch (err) {
      console.log(err);
    }
  }
}

export function getMediaById(itemId) {
  return async () => {
    return await mediaService.getById(itemId);
  };
}

export function setFilterBy(filterBy) {
  return async (dispatch) => {
    dispatch({ type: 'SET_FILTER_BY', filterBy });
  };
}

