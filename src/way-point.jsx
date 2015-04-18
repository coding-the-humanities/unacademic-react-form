import React from 'react';

class WayPoint extends React.Component {
	render(){
		var waypoint = this.props.state;
	  	return (
	  		<div className="wayPoint" style={{background: 'blue', marginLeft: '10px'}}>
	  			<h3 contentEditable="true">title: {waypoint.title}</h3>
	  			<p contentEditable="true">summary: {waypoint.summary}</p>
	  			<p contentEditable="true">description: {waypoint.description}</p>
	   		</div>
	  	)
  	}
}

export default WayPoint;