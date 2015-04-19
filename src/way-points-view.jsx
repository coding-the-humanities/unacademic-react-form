import React from 'react';

import WayPoint from './way-point.jsx';

class WayPointsView extends React.Component {
	render(){
		var userData = this.props.state,
			setActiveWaypoint = this.props.setActiveWaypoint,
			createNewPoint = this.props.createNewPoint;
	  	return (
	  		<section className="waypointsView">
	  			<h2>Waypoints:</h2>
	  			{ userData.waypoints.map((value, index) => 
	  				<WayPoint key={ index } index={ index } state={ value } setActiveWaypoint={setActiveWaypoint} />
	  			) }
	  			<button onClick={createNewPoint.bind(this, [])}>add waypoint</button>
	   		</section>
	  	)
  	}
}

export default WayPointsView;