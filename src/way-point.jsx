import React from 'react';

class WayPoint extends React.Component {
	render(){
		var waypoint = this.props.state,
			index = this.props.index;
	  	return (
	  		<div className="waypoint">
	  			<h3>{index}:{waypoint.title}</h3>
	   		</div>
	  	)
  	}
}

export default WayPoint;