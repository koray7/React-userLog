
import React from 'react';


const TravelList = (props) => {


    return (
    <div onClick={() => {
        props.onChecked(props.id)
    }}
    >
        <li>
        {props.text}
        </li>
    </div>
    )
}
export default TravelList;