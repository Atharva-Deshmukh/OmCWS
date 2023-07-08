import { Component } from "react";

export default function Student(props){
   return(
    <> 
    <h1>student Name : {props.name}</h1>
    <h2>student roll : {props.roll}</h2>
    <h2>student class : {props.class}</h2>
    
    
    </>


   );
}

