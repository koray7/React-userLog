import React from "react";
// import Login from "./Login";
import Form from "./Form";

// var isLoggedIn = false;

var userIsRegistered = true;



// function renderConditionally() {
//     if (userIsRegistered === false) {
//         return <h1>Hello</h1>;
//     }else {
//         return <Form />;
//     }
// }

function App() {
return (
<div className="container">
{/* {renderConditionally()} */}
<Form 
    isRegistered={userIsRegistered}
/>

{/* {userIsRegistered()} */}
</div>
);
}

export default App;
