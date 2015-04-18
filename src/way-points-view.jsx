import React from 'react';

import WayPoint from './way-point.jsx';

class WayPointsView extends React.Component {
	render(){
		var userData = this.props.state;
	  	return (
	  		<section className="waypointsView">
	  			<h2>Waypoints:</h2>
	  			{ userData.waypoints.map((value, index) => <WayPoint key={ index } index={ index } state={ value }/>) }
	   		</section>
	  	)
  	}
}

export default WayPointsView;