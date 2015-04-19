import React from 'react';

class WaypointsList extends React.Component {
	render(){
		var userData = this.props.state,
			setActiveWaypoint = this.props.setActiveWaypoint,
			createOrRemovePoint = this.props.createOrRemovePoint;
			
	  	return (
	  		<section className="WaypointsList">
	  			<h2>Waypoints:</h2>

  				{()=>{
					return (typeof userData.waypoints == 'undefined') 
	 				? ( <p> No checkpoints </p>) 
	 				: (

		 				userData.waypoints.map((value, index) => 
			  				<div key={index}>
			  					<h3 className="waypoint" onClick={ setActiveWaypoint.bind(this, index)}> {index}:{value.title} </h3>
				  				<button onClick={createOrRemovePoint.bind(this, [index], 'remove')}>remove waypoint</button>
			  				</div>
		  				) 
	  				)
	  			;}()}
	  			
	  			<button onClick={createOrRemovePoint.bind(this, [], 'create')}>add waypoint</button>
	   		</section>
	  	)
  	}
}

export default WaypointsList;