
import React, { useState } from 'react';


const TravelList = (props) => {

    const [crossed, setCrossed] = useState(false)

    function handleCrossed() {
        setCrossed(prevValue => {
            return !prevValue;
        });
    }

    return (
    <div onClick={handleCrossed}>
        <li style={{ textDecoration: crossed ? 'line-through' : "none" }}>
        {props.text}
        </li>
    </div>
    )
}
export default TravelList;