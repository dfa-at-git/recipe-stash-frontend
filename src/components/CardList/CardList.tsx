import React, { FC } from 'react';
import Card from '../Card/Card';
import './CardList.css'

interface CardData {
    title: string;
    content: string;
}

interface CardListProps {
    data: CardData[];
}

const CardList: FC<CardListProps> = ({ data }) => {
    return (
        <div className="card-list-container">
            {data.map((item, index) => (
                <Card key={index} title={item.title} content={item.content} />
            ))}
        </div>
    );
};

export default CardList