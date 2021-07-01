const initData = {
     flag: false
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
        default: return state
    } 
}

export default todoReducer