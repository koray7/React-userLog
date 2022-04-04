import React, { useState } from "react";


function App() {


    const now = new Date().toLocaleTimeString();
    const [time, setTime] = useState(now)
    

    function clicked() {
    const timeNow = new Date().toLocaleTimeString();
        setTime(timeNow);
    }


    return (
        <div className="container">
            <h1>{time}</h1>
            <button onClick={clicked}>Get Time Austin!</button>
        </div>
    )
}

export default App;
