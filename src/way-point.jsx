import React from 'react';

class WayPoint extends React.Component {
	render(){
		var waypoint = this.props.state;
	  	return (
	  		<div className="wayPoint" style={{background: 'blue', marginLeft: '10px'}}>
	  			<h3>{waypoint.title}</h3>
	   		</div>
	  	)
  	}
}

export default WayPoint;