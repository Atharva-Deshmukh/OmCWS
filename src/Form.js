import React, { useState } from 'react';

export default function Form() {
    const [state, setState] = useState({
        name: "Your name here",
        email: "mail id here",
        rollNumber: 53,
        address: "Nagpur",
      });

      const [submitted, setSubmitted] = useState(false);

    function handleInputChange(event, inputName) {
        const value = event.target.value;
        setState(value);
      };

      function handleSubmit(event) {

        // prevent refreshing of page
        event.preventDefault();
       
        setSubmitted(true);
      }

   
    return (
  <div>
    <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td><label>Name:</label></td>
              <td><input type="text" value={state.name} onChange={(event) => handleInputChange(event, 'name')} /></td>
            </tr>
            <tr>
              <td><label>Email:</label></td>
              <td><input type="email" value={state.email} onChange={(event) => handleInputChange(event, 'email')} /></td>
            </tr>
            <tr>
              <td><label>Roll Number:</label></td>
              <td><input type="text" value={state.rollNumber} onChange={(event) => handleInputChange(event, 'rollNumber')} /></td>
            </tr>
            <tr>
              <td><label>Address:</label></td>
              <td><textarea value={state.address} onChange={(event) => handleInputChange(event, 'address')} /></td>
            </tr>
          </tbody>
        </table>
        <button type="submit">Submit</button>
      </form>
      {submitted && <h1>Submitted successfully!</h1>}
      </div>
    );
}
