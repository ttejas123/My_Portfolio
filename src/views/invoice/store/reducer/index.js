const initialState = {
  data: [],
  total: 1,
  params: {},
  filtered: {},
  allData: []
}

const invoiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return {
        ...state,
        allData: action.allData,
        data: action.data,
        total: action.totalPages,
        filtered: action.filtered,
        params: action.params
      }
    case 'DELETE_INVOICE':
      return { ...state }
    default:
      return { ...state }
  }
}
export default invoiceReducer
