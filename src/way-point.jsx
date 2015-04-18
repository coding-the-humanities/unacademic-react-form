import React from 'react';

class WayPoint extends React.Component {
	render(){
		var waypoint = this.props.state;
	  	return (
	  		<div className="waypoint">
	  			<h3>title: {waypoint.title}</h3>
	  			<p>summary: {waypoint.summary}</p>
	  			<p>description: {waypoint.description}</p>
	   		</div>
	  	)
  	}
}

export default WayPoint;