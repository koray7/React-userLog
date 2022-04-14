import React,{ useState } from "react";
import TravelList from "./components/TravelList";

function App() {

    const [newPlace, setNewPlace] = useState("");
    const [items, setItems] = useState([]);

    function handleChange(event) {
        const newValue = event.target.value;
        setNewPlace(newValue)
    }

    function addItem() {
        setItems( (prevItems) => {
            return [...prevItems, newPlace]
        });
        setNewPlace("");
    }

    function deleteItem(id) {
        setItems( (prevItems) => {
            return prevItems.filter(
                (item, index) => {
                    return index !== id
                }
            )
        });
    }

    return (

    <div className="container">
        <div className="heading">
            <h1>Travel List</h1>
        </div>
        
        <div className="form">
            <input onChange={handleChange} type="text" value={newPlace} />
            <button onClick={addItem}><span>Add</span></button>
            <button onClick={addItem}><span>Delete</span></button>
        </div>
        <div>
            <ul>
                {items.map((todo, index) => (
                <TravelList 
                id={index}
                key={index}
                text={todo}
                onChecked={deleteItem}
                />
                ))}
            </ul>
        </div>
    </div>
    );
}

export default App;
