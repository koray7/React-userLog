import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./components/App";
import cars from "./practice"


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <table>
        <tr>
            <th>Brand</th>
            <th>Top Speed</th>
        </tr>
        <tr>
            <td>{cars[1].model}</td>
            <td>{cars[1].speedStats.topSpeed}</td>
            <td>{cars[1].coloursByPopularity}</td>
        </tr>
        <tr>
            <td>{cars[0].model}</td>
            <td>{cars[0].speedStats.topSpeed}</td>
            <td>{cars[0].coloursByPopularity}</td>
        </tr>
    </table>
)

