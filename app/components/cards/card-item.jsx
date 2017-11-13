import React, {PropTypes as T} from 'react';
import {Link} from 'react-router';

function CardItem (props) {

    const handleDelete = () => {
        props.onDelete(props.id); 
    };

    return (
        <div className='col s12 m6 l4'>
            <div id='card' className='card'>
                <div className='card-content'>
                    <span id={props.id} className='card-title grey-text text-darken-4'>
                        {props.title}
                    </span>
                    <p>
                        {props.description}
                    </p>
                </div>
                <div className='card-action'>
                    <Link
                        to={`/card-update/${props.id}`}
                        id={props.id}
                        className='card-update btn-floating'
                    >
                        <i className='material-icons'>mode_edit</i>
                    </Link>
                    <a 
                        id={props.title}
                        className='btn-floating'
                        onClick={handleDelete}
                    >
                        <i className='material-icons'>delete</i>
                    </a>
                </div>
            </div>
        </div>
    );
}

CardItem.propTypes = {
    id: T.number,
    description: T.string,
    title: T.string,
};

export default CardItem;
