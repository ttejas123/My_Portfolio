// ** Initial State
const initialState = {
  events: [],
  selectedEvent: {},
  selectedCalendars: ['Personal', 'Business', 'Family', 'Holiday', 'ETC']
}

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
  
    case 'UPDATE_EVENT':
      return { ...state }
    case 'UPDATE_FILTERS':
      // ** Updates Filters based on action filter
      const filterIndex = state.selectedCalendars.findIndex(i => i === action.filter)
      if (state.selectedCalendars.includes(action.filter)) {
        state.selectedCalendars.splice(filterIndex, 1)
      } else {
        state.selectedCalendars.push(action.filter)
      }
      if (state.selectedCalendars.length === 0) {
        state.events.length = 0
      }
      return { ...state }
    case 'UPDATE_ALL_FILTERS':
      // ** Updates All Filters based on action value
      const value = action.value
      let selected = []
      if (value === true) {
        selected = ['Personal', 'Business', 'Family', 'Holiday', 'ETC']
      } else {
        selected = []
      }
      return { ...state, selectedCalendars: selected }

    default:
      return state
  }
}

export default notificationReducer
