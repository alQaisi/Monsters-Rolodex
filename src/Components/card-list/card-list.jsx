import React from 'react';
import './card-list.style.css';
import {Card} from '../card/card.jsx';
const CardList=({monsters,title})=>{
    return(
        <div className="card-list">
            {
              monsters.map((monster)=><Card title={title} key={monster.id} monster={monster}/>)
            }
        </div>
    )
};
export default CardList;

