import React, { useState } from "react";

function App() {

    const [fname, setFName] = useState("")
    const [lname, setLname] = useState("")

    function updateFName(some1) {
        const firstName = some1.target.value
        setFName(firstName)
    }

    function updateLName(some1) {
        const lastName = some1.target.value
        setLname(lastName)
    }

    return (
    <div className="container">
        <h1>Hello {fname} {lname} </h1>
        <form>
            <input 
            onChange={updateFName} 
            name="fName" 
            placeholder="First Name" 
            value={fname}
            />
            <input 
            onChange={updateLName}
            value={lname}
            name="lName" 
            placeholder="Last Name" />
            <button>Submit</button>
        </form>
    </div>
    );
}

export default App;

