import React, { useState } from 'react';


export default function Count() {
    const [add, setAdd] = useState(10);
    const [mul, setMul] = useState(5);
    

    function handleclick()
    {
        setAdd(add+1);
        setMul(mul*2);

    }
    return (
       <>
       
       add is {add}
       mul is {mul}
       
       <button onClick={()=> setAdd(add+1)}> Add</button>
       <button onClick={()=> setMul(mul*2)}> Mul</button>
       <button onClick={handleclick}>BOTH</button>
       
       </>
    );
}
