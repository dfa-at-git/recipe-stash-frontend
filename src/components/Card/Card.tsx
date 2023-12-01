import React, { FC } from "react";
import './Card.css'

interface CardProps {
    title: string,
    content: string,
}

const Card: FC<CardProps> = (card: CardProps) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.content}</p>
            </div>
        </div>
    );
};

export default Card