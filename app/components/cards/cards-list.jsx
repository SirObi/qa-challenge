import React, {PropTypes as T} from 'react';
import Card from './card-item.jsx';

function CardList ({cards, onDelete}) {

    return (
        <div className='row'>
            {
                cards.map(item => {
                    return (
                        <Card
                            key={item.id}
                            {...item}
                            onDelete={onDelete}
                        />
                    );
                })
            }
        </div>
    );
}

CardList.propTypes = {
    cards: T.array,
    onDelete: T.func
};

export default CardList;

