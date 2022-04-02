import React from "react";
// import Login from "./Login";
import Form from "./Form";

// var isLoggedIn = false;

// var userIsRegistered = false;


// const strikeThrough = {textDecoration: "line-through"}


// function renderConditionally() {
//     if (userIsRegistered === false) {
//         return <h1>Hello</h1>;
//     }else {
//         return <Form />;
//     }
// }

function strike() {
    document.getElementById("root").style.textDecoration = "line-through";
    document.getElementById("root").style.color = "red";

}

function antiStrike() {
    document.getElementById("root").style.textDecoration = "none";
    document.getElementById("root").style.color = "yellow";
}


function App(props) {
return (
<div className="container">

    <h1>AUSTIN</h1>
    <button onClick={strike}>Change</button>
    <button onClick={antiStrike}>Back</button>
    
    
    
    
    {/* <button  onClick={Click1}>Back</button> */}




{/* {renderConditionally()}
<Form 
    isRegistered={userIsRegistered}
/>

{userIsRegistered()} */}
</div>
);
}

export default App;
