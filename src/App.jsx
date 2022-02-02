import React from 'react';
import Lists from "./Components/Lists/Sidebar";
import {useState} from "react";
import AddModalList from "./Components/AddListModal/AddModalList";


const items = [
    {icon: null, color: '', name: 'All tasks', active: false},
    {icon: null, color: 'blue', name: 'Movies and series', active: true},
    {icon: null, color: 'green', name: 'Books', active: false},
    {icon: null, color: 'yellow', name: 'Personal', active: false},
    {icon: null, color: 'yellow', name: 'Purchases', active: false},
]


function App() {
    const [isOpenModal, setOpenModal] = useState(false);

    return (
        <div className="todo">
            <div className="todo__sidebar">
                <Lists isRemovable items={items}/>
                <button onClick={() => setOpenModal(!isOpenModal)} className="sidebar__add-button">
                    <Lists items={[{
                        icon: <img src="https://img.icons8.com/material-sharp/24/000000/add-column.png" alt="icon"/>,
                        color: null,
                        name: isOpenModal ? 'Close' : 'Add something',
                    }]}/>
                </button>
            </div>
            {isOpenModal ? <AddModalList setOpenmodal={() => setOpenModal(isOpenModal)}/> : null}
            <div className="todo_tasks">

            </div>
        </div>
    );
}

export default App;
