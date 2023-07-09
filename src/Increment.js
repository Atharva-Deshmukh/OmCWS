import React, { useState } from 'react';

export default function Increment() {
    var [a, setA] = useState(0);
    var [b, setB] = useState(0);
   
    return (
        <div >
            <p>First number</p>
            <input
                type="number"
                value={a}
                onChange={(e) => setA(parseInt(e.target.value))}
            />

            <p>Second numeber</p>
            <input
                type="number"
                value={b}
                onChange={(e) => setB(parseInt(e.target.value))}
            />

            <h2>Addition of these two numbers: {a+b}</h2>
            <h2>value of a: {a}</h2>
            <h2>value of b: {b}</h2>
            <h3>expontial :{a**b}</h3>
            <h2>pre incremnt :{++a}</h2>


        </div>
    );
}
