
import React from 'react';


const TravelList = (props) => {


    return (
    <div onClick={() => {
        props.onChecked(props.id)
    }}
    >
        <li className="list">
        {props.text}
        <button className="list-btn"><span>Delete</span></button>
        </li>
    </div>
    )
}
export default TravelList;