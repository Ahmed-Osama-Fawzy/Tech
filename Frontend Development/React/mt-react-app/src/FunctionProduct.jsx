import React , {useState,useEffect} from "react"
import Interval from "./Interval"

const FProduct = ()=>{
    // Initalize new Hook use State
    const [State, SetState] = useState(0)
    const [State2, SetState2] = useState(0)
    const [State3, SetState3] = useState({"Name":"Ahmed", "Age":20})
    const [State4, UseState4] = useState(true)

    // Update State Using Previous State's Value
    const increaseState2 = Val => {
        SetState2(prevstate => prevstate+Val)
    }

    // Update State Using Clone Object's Values & Update Exists Values
    const increaseState3 = Val => {
        SetState3(prevstate => ({...State3, "Age": prevstate.Age+Val}))
    }
    
    // Initalize new Hook use Effect
    /*
        States of Use Effect
        - Have no Array, Will Release with every render
        - Have Empty Array, Will Release with first render only
        - Have UnEmpty Array, Will Release with first render & when each item from array effected

    */
    useEffect(()=>{
        console.log("Use Effect Release")
    },[State])
    return (
        <>
            <div className="container">
                <h1>Function Products</h1>
                <div>
                    <h2> State 1 </h2>
                    <button className="badge text-bg-light m-1" onClick={()=>{SetState(State+1)}}>+</button>
                    <span className="badge text-bg-dark m-1"> Counter : {State} </span>
                    <button className="badge text-bg-success m-1" onClick={()=>{SetState(State-1)}}>-</button>
                </div>
                <div>
                    <h2> State 2 </h2>
                    <button className="badge text-bg-light m-1" onClick={() =>{increaseState2(4)}}>+</button>
                    <span className="badge text-bg-dark m-1"> Counter : {State2} </span>
                </div>
                <div>
                    <h2> State 3 </h2>
                    <span className="badge text-bg-dark m-1"> Name : {State3.Name} </span>
                    <button className="badge text-bg-light m-1" onClick={() =>{increaseState3(2)}}>+</button>
                    <span className="badge text-bg-dark m-1"> Age : {State3.Age} </span>
                </div>
                <div>
                    <button onClick={() => UseState4(!State4)}>Hide/Show</button>
                    {State4 && <Interval/>}
                </div>
            </div>
        </>
    )
}
export default  FProduct;












/*

    
    
    
                
*/