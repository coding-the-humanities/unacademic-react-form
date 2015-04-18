import React from 'react';

import CheckPoint from './check-point.jsx';

class CheckPointsView extends React.Component {
	render(){
		var waypoints = this.props.state;
	  	return (
	  		<section className="checkpointsView">
	  			<h2> Checkpoints: </h2>
	  			{ waypoints.checkpoints.map((value, index) => <CheckPoint key={ index } index={ index } state={ value }/>) }
	   		</section>
	  	)
  	}
}

export default CheckPointsView;