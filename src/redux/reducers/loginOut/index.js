const initData = {
     flag: false,
     searchProps: false
}
const todoReducer = (state = initData, action) => {

    switch (action.type) {
        case "SignIn": 
            
            return {
                ...state,
                flag: true
            }

        case "SignOut": 
  
            return {
                ...state,
                flag: false
            }

        case "SearchProp": 
  
            return {
                ...state,
                searchProps: (!state.searchProps)
            }
        default: return state
    } 
}

export default todoReducer