import React , {useEffect} from "react"

 const Interval = ()=>{
    useEffect(() => {
        const NewInterval = setInterval(()=>{
            console.log("New Interval")
        },1000)
        return (() => {
            console.log("Clean Up Function")
            clearInterval(NewInterval)
        })
    })
    return (
       <>
         <div> Create Interval </div>
       </>
    )
 }

 export default Interval