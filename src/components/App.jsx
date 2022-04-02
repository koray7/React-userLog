import React, { useState } from "react";


function App() {

    var today = new Date().toLocaleTimeString();

    const [time, setTime] = useState(today)



    function getTime(){
        const timeNow = new Date().toLocaleTimeString();
        setTime(timeNow)
        // console.log(timeNow)
    }

    return (
        <div className="container">
            <h1>{time}</h1>
            <button onClick={getTime}>Get Time</button>
        </div>
    )
}

export default App;
