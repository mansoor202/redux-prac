import { useEffect, useState } from "react";
import { connect } from "react-redux";
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
  console.log(
    "values received to the addNum function are ",
    typeof a,
    typeof b
  );
  return {
    type: "addNum",
    payload: {
      val1: Number(a),
      val2: Number(b),
    },
  };
}

const mapStateToProps = (state) => {
    console.log("mapStateToProps ",state)
  return {
    value1: state.val1,
    value2: state.val2,
    sum: state.sum,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setNum1: (e) => dispatch(setVal1(e)),
    setNum2: (e) => dispatch(setVal2(e)),
    setSum: (a, b) => dispatch(addNum(a, b)),
  };
};





function ReduxCalculator(props) {
  return (
    <div>
      <h2>Add Numbers</h2>
      <input value={props.value1} onChange={(e)=>props.setNum1(e)} />
      <br />
      <br />
      <input value={props.value2} onChange={(e)=>props.setNum2(e)} /> <br />
      <br />
      <button onClick={props.setSum(props.value1,props.value2)}>Add Now</button>
      <br />
      <h2>Sum</h2>
      <p>{props.sum}</p>
    </div>
  );    
}

export default connect (mapStateToProps, mapDispatchToProps)(ReduxCalculator);
