import React from 'react';
import './card.style.css';
export const Card=({monster,title})=>(
    <div className={
        title===monster.name?`card-container ${monster.name} currentCard`:`card-container ${monster.name}`}
        id={monster.name}>
        <img className="monster" src={`https://robohash.org/${monster.id}?set=set2&size=220x220`} alt={monster.name}/>
        <h2>{monster.name}</h2>
        <p>{monster.email}</p>
    </div>
);