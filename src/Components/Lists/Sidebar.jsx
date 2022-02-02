import React from 'react';
import "./Lists.scss";

const Lists = ({items, isRemovable}) => {
    return (
        <ul className="list">
            {items.map((event, index) => (
                <li key={index} className={event.active ? 'active' : null}>
                    <i>{event.icon ? event.icon : <i className={`badge badge--${event.color}`}> </i>}</i>
                    <span>{event.name}</span>
                </li>
            ))}
        </ul>
    );
};

export default Lists;