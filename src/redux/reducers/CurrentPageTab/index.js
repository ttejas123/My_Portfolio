const initialState = {
  dashboardTab: 1,
  projectTab: 1,
  bidTab: 1,
  sponTab: 1
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DASHBOARD':
      state = {
        ...state,
        dashboardTab: action.payload
      }
      return state
    case 'PROJECTTAB':
      state = {
        ...state,
        projectTab: action.payload
      }
      return state
    case 'BIDTAB':
      state = {
        ...state,
        bidTab: action.payload
      }
      return state
    case 'SPONSORTAB':
      state = {
        ...state,
        sponTab: action.payload
      }
      return state
    default:
      return state
  }
}

export default authReducer
