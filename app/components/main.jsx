import React, {PropTypes as T} from 'react';
import {Link} from 'react-router';

function Main (props) {
  
	return (
		<div>
			<nav className='blue-grey darken-2' role='navigation'>
				<div className='nav-wrapper'>
					<Link id='logo-container' to='/' className='left brand-logo'>&nbsp;&nbsp;Home</Link>
				    <ul id="nav-mobile" className="right hide-on-med-and-down">
				        <li>
				        	<Link to='/card-add'>Add New Card</Link>
				        </li>
				    </ul>
				</div>
			</nav>
			<div className='container section'>
				{
					props.children
				}
			</div>
		</div>
	);
}

Main.propTypes = {
	children: T.oneOfType([T.array, T.string, T.object]).isRequired
};

export default Main;


<nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
