// ** Initial State
const initialState = {
  events: [],
  selectedEvent: {},
  selectedNotification: ['Payment', 'Bid', 'Profile', 'Order']
  
}

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_EVENTS':
      console.log("the evenuts of action ", action)
      return { ...state, events: action.data.events }
    case 'UPDATE_EVENT':
      return { ...state }
    case 'UPDATE_FILTERS':
      // ** Updates Filters based on action filter
      const filterIndex = state.selectedNotification.findIndex(i => i === action.filter)
      if (state.selectedNotification.includes(action.filter)) {
        state.selectedNotification.splice(filterIndex, 1)
      } else {
        state.selectedNotification.push(action.filter)
      }
      if (state.selectedNotification.length === 0) {
        state.events.length = 0
      }
      return { ...state }
    case 'UPDATE_ALL_FILTERS':
      // ** Updates All Filters based on action value
      const value = action.value
      let selected = []
      if (value === true) {
        selected = ['Payment', 'Bid', 'Profile', 'Order']
      } else {
        selected = []
      }
      return { ...state, selectedNotification: selected }

    default:
      return state
  }
}

export default notificationReducer
