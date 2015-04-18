import React from 'react';

import WayPoint from './way-point.jsx';

class WayPointsView extends React.Component {
	render(){
	  	return (
	  		<section className="wayPointsView" style={{background: 'lightblue'}}>
	  			<p>Im the Waypoints view</p>
	  			<WayPoint />
	  			<WayPoint />
	   		</section>
	  	)
  	}
}

export default WayPointsView;