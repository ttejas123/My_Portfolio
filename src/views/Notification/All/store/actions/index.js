import axios from 'axios'

// ** Filter Events
export const updateFilter = filter => {
  return (dispatch, getState) => {
    dispatch({
      type: 'UPDATE_FILTERS',
      filter
    })
    dispatch(fetchEvents(getState().calendar.selectedCalendars))
  }
}

// ** Add/Remove All Filters
export const updateAllFilters = value => {
  return (dispatch, getState) => {
    dispatch({
      type: 'UPDATE_ALL_FILTERS',
      value
    })
    dispatch(fetchEvents(getState().calendar.selectedCalendars))
  }
}
