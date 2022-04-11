import React,{ useState } from "react";


function App() {

    const [newPlace, setNewPlace] = useState("");
    const [items, setItems] = useState([]);

    function handleChange(event) {
        const newValue = event.target.value;
        setNewPlace(newValue)
    }

    function addItem() {
        setItems( (prevValue) => {
            return [...prevValue, newPlace]
        });
        setNewPlace("");
    }

    return (

    <div className="container">
        <div className="heading">
            <h1>Travel List</h1>
        </div>
        
        <div className="form">
            <input onChange={handleChange} type="text" value={newPlace} />
            <button onClick={addItem}><span>Add</span></button>
            <button onClick={addItem}><span>Remove</span></button>
            <button onClick={addItem}><span>Edit</span></button>
        </div>
        <div>
            <ul>
                {items.map(todo => <li>{todo}</li>)}
            </ul>
        </div>
    </div>
    );
}

export default App;
