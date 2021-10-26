const initialState = {
    val1: 0,
    val2:0,
    sum:0
}


const  reducer = (state=initialState, action) => {
    if (action.type === "addNum") {
      return ({
        ...state,
        val1: action.payload.val1,
        val2: action.payload.val2,
        sum: action.payload.val1 + action.payload.val2,
      });
    } else if (action.type === "setNum1") {
      return ({
        ...state,
        val1: action.payload.val1,
      })
    } else if (action.type === "setNum2") {
      return ({
        ...state,
        val2: action.payload.val2,
      })
    }
    else{
      return ({
      ...state
    })}
  };

  export default reducer;