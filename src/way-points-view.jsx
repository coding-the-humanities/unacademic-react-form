import React from 'react';

import WayPoint from './way-point.jsx';

class WayPointsView extends React.Component {
	render(){
	  	return (
	  		<section className="wayPointsView" style={{background: 'lightblue'}}>
	  			<h3>Waypoints:</h3>
	  			{ this.props.state.waypoints.map((value, index) => <WayPoint key={ index } index={ index } state={ value }/>) }
	   		</section>
	  	)
  	}
}

export default WayPointsView;