import React, { useState } from 'react';

export default function Gof3() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);
    const [d, setD] = useState(0);

    function gof3(a,b,c) {

        // One way --> setD(Math.max(a, b, c));

        // second way --> use if-else
        let greatest = null;
        if (a !== '' && b !== '' && c !== '') {
            if (a >= b && a >= c) {
              greatest = a;
            } else if (b >= a && b >= c) {
              greatest = b;
            } else {
              greatest = c;
            }
          }
      
        setD(greatest);
    }
   
   
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

            <p>Third number</p>
            <input
                type="number"
                value={c}
                onChange={(e) => setC(parseInt(e.target.value))}
            />

        
            <button onClick={()=> {gof3(a,b,c)}}>Find Greatest of Three</button>
            {d !== null && <p>Greatest Number: {d}</p>}

        </div>
    );
}
