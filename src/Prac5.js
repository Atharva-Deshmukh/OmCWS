import React, { useState } from 'react';

export default function Marks() {
    const [a, setA] = useState("om deshmukh");
    const [b, setB] = useState(53);
    const [c, setC] = useState(0);
    const [d, setD] = useState(0);
    const [total, setTotal] = useState(0);
    const [Percentage, setPercent] = useState(0);

    function totalMarks(c,d) {
        setTotal(c+d);
    }

    function totalPercentage(c,d) {
        setPercent(((c+d)/200)*100);
    }

    return (
        <div>
            <p>name</p>
            <input
                type="text"
                value={a}
                onChange={(e) => setA(e.target.value)}
            />
            <p>roll no</p>
            <input
                type="number"
                value={b}
                onChange={(e) => setB(parseInt(e.target.value))}
            />

            <h1>enter marks</h1>
            
            <p>oops</p>
            <input
                type="number"
                value={c}
                onChange={(e) => setC(parseInt(e.target.value))}
            />

            <p>CPP</p>
            <input
                type="number"
                value={d}
                onChange={(e) => setD(parseInt(e.target.value))}
            />

            <button onClick={()=> {totalMarks(c,d)}}>Calculate Total</button>
            <p>Total marks - {total}</p>

            <button onClick={()=> {totalPercentage(c,d)}}>Calculate Percentage</button>
            <p>Percentage - {Percentage}</p>

        </div>
    );
}
