import React from 'react';

class WaypointChangable extends React.Component {
	render(){
		var waypoint = this.props.state,
			setValue = this.props.setValue,
			outsideIndex = this.props.index;
	  	return (
	  		<div className="waypointChangable">
	  			<h2>Current waypoint: </h2>
	  			<h3>title: <input className="editable" defaultValue={waypoint.title} onChange={ setValue.bind(this, outsideIndex, "title") }></input></h3>
	  			<p>summary: <input className="editable" defaultValue={waypoint.summary} onChange={ setValue.bind(this, outsideIndex, "summary") }></input></p>
	  			<p>description: <input className="editable" defaultValue={waypoint.description} onChange={ setValue.bind(this, outsideIndex, "description") }></input></p>
	   		</div>
	  	)
  	}
}

export default WaypointChangable;