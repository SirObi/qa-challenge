import React, {PropTypes as T} from 'react';
import CardsContainer from '../containers/cards-container';

function Home (props) {

    return (
     	<div>
     		<CardsContainer num={props.params.num}/>
     	</div>
    );
}

Home.propTypes = {
 	params: T.shape({
 		num: T.string
  	})
};

export default Home;
