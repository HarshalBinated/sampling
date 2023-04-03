import react, { useState } from "react"

const Index =()=>{
  const[count, setCount]  = useState(0)

const handlechange=()=>{
  setCount(count+1)
}
  return(
    <>
    <div>{count}</div>
    <button onClick={handlechange}>increase</button>
    </>
  )
}
export default Index