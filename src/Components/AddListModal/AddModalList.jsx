import React, {useState} from 'react';
import "./Modal.scss"


const colors = [
    {
        "id": 1,
        "hex": "#C9D1D3",
        "name": "grey"
    },
    {
        "id": 2,
        "hex": "#42B883",
        "name": "green"
    },
    {
        "id": 3,
        "hex": "#64C4ED",
        "name": "blue"
    },
    {
        "id": 4,
        "hex": "#FFBBCC",
        "name": "pink"
    },
    {
        "id": 5,
        "hex": "#B6E6BD",
        "name": "lime"
    },
    {
        "id": 6,
        "hex": "#C355F5",
        "name": "purple"
    },
    {
        "id": 7,
        "hex": "#110133",
        "name": "black"
    },
    {
        "id": 8,
        "hex": "#FF6464",
        "name": "red"
    }
];

const AddModalList = () => {
    const [newCategory, setNewCategory] = useState('');
    const [activeColor, setActiveColor] = useState(null);


    const onAddNewListItem = () => {
        console.log(newCategory, activeColor)
    }

    return (
        <div className="modal">
            <input type="text" placeholder="Text..." onChange={event => setNewCategory(event.target.value)}
                   value={newCategory}/>
            <div className="modal-colors">
                {colors.map((color,) => (
                    <i key={color.id} onClick={() => setActiveColor(color.id)}
                       className={`badge ${activeColor === color.id ? 'badge--active' : ''} badge--${color.name} `}/>
                ))}
            </div>
            <button onClick={onAddNewListItem}>Add</button>
        </div>
    );
};

export default AddModalList;