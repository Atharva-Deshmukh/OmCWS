import React,{useState} from 'react'

export default function BMICalculator() {
    const[text1,setText1]=useState(0);
    const[text2,setText2]=useState(0);
    const[text3,setText3]=useState(0);
function change1(event){
    setText1(event.target.value); 
}
function change2(event){
    setText2(event.target.value); 
}
function BMI(){
    setText3(text2/(text1*text1));
}
  return (
    <>
    Height(m) : <input type = 'text' value={text1} onChange={change1}></input><br></br>
    Weight(kg) : <input type = 'text' value={text2} onChange={change2}></input><br></br>
    BMI : <input type = 'text' value={text3}></input><br></br>
    <button onClick={BMI}>Calculate BMI</button><br></br>
    </>
  )
}