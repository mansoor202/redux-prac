import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const setVal1 = (e) => {
  return {
    type: "setNum1",
    payload: {
      val1: e.target.value,
    },
  };
};

const setVal2 = (e) => {
  return {
    type: "setNum2",
    payload: {
      val2: e.target.value,
    },
  };
};

function addNum(a, b) {
  return {
    type: "addNum",
    payload: {
      val1: Number(a),
      val2: Number(b),
    },
  };
}







function ReduxCalculator(props) {
  const value1=useSelector((state)=>state.val1)
  const value2=useSelector((state)=>state.val2)
  const sum=useSelector((state)=>state.sum)
  const dispatch=useDispatch()

  return (
    <div>
      <h2>Add Numbers</h2>
      <input value={value1} onChange={(e)=>dispatch(setVal1(e))} />
      <br />
      <br />
      <input value={value2} onChange={(e)=>dispatch(setVal2(e))} /> <br />
      <br />
      <button onClick={()=>dispatch(addNum(value1,value2))}>Add Now</button>
      <br />
      <h2>Sum</h2>
      <p>{sum}</p>
    </div>
  );    
}

export default ReduxCalculator
