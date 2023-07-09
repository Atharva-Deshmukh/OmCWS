import React, {useState} from 'react';

export default function CaseConvertor() {
    
    const [text, setText] = useState("om deshmukh");
   
    function convert() {
        setText((text) => {
            if (text === text.toLowerCase()) {
              return text.toUpperCase();
            } else {
              return text.toLowerCase();
            }
          });
    }

    return (
        <div >
            
            <p>name</p>
            <input
                type="text"
                
                onChange={(e) => setText(e.target.value)}
            />

      <button  onClick={convert}>CHANGE CASE</button>

      <p>Coverted text: {text}</p>

        </div>
    );
}
