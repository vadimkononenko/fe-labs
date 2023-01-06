import React from "react";
import {goods} from "../../goods";
import GoodsCard from "../GoodsCard/GoodsCard";
import '../Cards/Cards.css';

export default function Cards() {
    return (
        <div className="Cards">
            {goods.map(good => <GoodsCard good={good} />)}
        </div>
    );
}