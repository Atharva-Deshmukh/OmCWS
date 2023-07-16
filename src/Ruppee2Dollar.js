import React,{useState} from 'react'

export default function Rupee2Dollar() {
    const[text1,setText1]=useState(0);
    const[text2,setText2]=useState(0);
function change(event){
    setText1(event.target.value);
}
    function Curr(event){
    setText2(text1/82);
}
  return (
   <>
    Rupees:<input type='text' value={text1} onChange={change}></input><br></br>
    US Dollars:<input type='text' value={text2}></input><br></br>
    <button onClick={Curr}>Convert</button>
   </>
  )
}