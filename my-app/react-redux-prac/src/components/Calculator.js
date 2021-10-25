import { useEffect, useState } from "react";
import store from "../Store";

console.log("Store in store.js ",store.getState())
 export function ReduxCalculator() {
    const [count,setCount]=useState(0)
    const [sum,setSum]=useState(0)

    let value1,value2;
  function addNum(a, b) {
    console.log("values received to the addNum function are ", typeof(a),typeof(b));
    return {
      type: "addNum",
      payload: {
        val1: Number(a),
        val2: Number(b),
      },
    };
  }

  store.subscribe(()=>{
      console.log("Store has been changed in Calculator",store.getState());
      const newState=store.getState();
      setSum(newState.sum)
      setCount(count+1)
    
    })
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
 

  
 
  console.log("initial state of the store is ",store.getState())
  const storeState = store.getState();
//   let value1 = storeState.val1;
//   let value2 = storeState.val2;
//   const sum = storeState.sum;

  const handleChange1 = (e) => {
    store.dispatch(setVal1(e));
  }

  const handleChange2=(e)=>{
      store.dispatch(setVal2(e))
  }


  function addNow() {
    const updatedState=store.getState()
    store.dispatch(addNum(updatedState.val1,updatedState.val2))


  }

  return (
    <div>
      <h2>Add Numbers</h2>
      <input value={value1} onChange={handleChange1} /><br/><br/>
      <input value={value2}  onChange={handleChange2}/> <br/><br/>
      <button onClick={addNow}>Add Now</button>

      <br/>
      
     <h2>Sum</h2>
     <p>{sum}</p>
    </div>
  );
}
