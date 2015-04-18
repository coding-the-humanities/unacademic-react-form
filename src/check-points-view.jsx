import React from 'react';

import CheckPoint from './check-point.jsx';

class CheckPointsView extends React.Component {
	render(){
	  	return (
	  		<section className="waypoints" style={{background: 'lightgreen'}}>
	  			<h3> Checkpoints: </h3>
	  			{ this.props.state.checkpoints.map((value, index) => <CheckPoint key={ index } index={ index } state={ value }/>) }
	   		</section>
	  	)
  	}
}

export default CheckPointsView;