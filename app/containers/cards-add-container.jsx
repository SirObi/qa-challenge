import React from 'react';
import {connect} from 'react-redux';
import {addCard} from '../actions/card-actions';
import CardsAdd from '../components/cards/cards-add';

function cardsAddContainer ({dispatch, cards}) {
    
    return (
        <CardsAdd
            onSubmit={(title, desc) =>
                dispatch(addCard(title,desc))
            }
        />
    );
}

function mapStateToProps (state) {
    return {
        cards: state.cards
    };
}

export default connect(mapStateToProps)(cardsAddContainer);
