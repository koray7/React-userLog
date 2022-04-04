import React, { useState } from "react";

function App() {

    const [headingText, setHeadingText] = useState("Hello");
    const [isMouseOver, setIsMouseOver] = useState(false)


    function handleClick() {
        setHeadingText("Submitted");
    }
    function changeBackground(){
        setIsMouseOver(true);
    }
    function changeBackgroundAgain(){
        setIsMouseOver(false);
    }

return (
<div className="container">
    <h1>{headingText}</h1>
    <input type="text" placeholder="What's your name?" />
    <button style={{ backgroundColor: isMouseOver ? "yellow" : "white"}} 
    onClick={handleClick} 
    onMouseOver={changeBackground} 
    onMouseOut={changeBackgroundAgain}>
    Submit</button>
</div>
);
}

export default App;

