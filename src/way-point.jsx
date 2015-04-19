import React from 'react';

class WayPoint extends React.Component {
	render(){
		var waypoint = this.props.state,
			index = this.props.index,
			setActiveWaypoint = this.props.setActiveWaypoint;
	  	return (
	  		<div className="waypoint">
	  			<h3 onClick={ setActiveWaypoint.bind(this, index)}>{index}:{waypoint.title}</h3>
	   		</div>
	  	)
  	}
}

export default WayPoint;