import React from "react";
import '../GoodsCard/GoodsCard.css';

export default function GoodsCard({good}) {
    return (
        <div className="GoodsCard">
            <img src={good.photo} alt={good.name}/>
            <span><em>City:</em> {good.name}</span>
            <span><em>Country:</em>{good.price}</span>
            <button>BUY NOW!</button>
        </div>
    );
}