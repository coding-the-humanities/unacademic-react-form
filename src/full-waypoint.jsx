import React from 'react';

import CheckPoint from './check-point.jsx';

class CheckPointsView extends React.Component {
	render(){
		var setValue = this.props.setValue,
			waypoint = this.props.state,
			outsideIndex = this.props.index,
			createOrRemovePoint = this.props.createOrRemovePoint;

	  	return (
	  		<section className="checkpointsView">

	  			<div className="waypointChangable">
		  			<h2>Current waypoint: </h2>
		  			<h3>title: <input className="editable" value={waypoint.title} onChange={ setValue.bind(this, outsideIndex, "title") }></input></h3>
		  			<p>summary: <input className="editable" value={waypoint.summary} onChange={ setValue.bind(this, outsideIndex, "summary") }></input></p>
		  			<p>description: <input className="editable" value={waypoint.description} onChange={ setValue.bind(this, outsideIndex, "description") }></input></p>
	   			</div>

	  			<h2> Checkpoints: </h2>
	  			
	  			{ waypoint.checkpoints.map((value, index) => {

	  				// make deepcopy and push -- Can without doubt be done better
	  				var insideIndex = JSON.parse(JSON.stringify(outsideIndex)); 
	  				insideIndex.push(index); 

	  				return (<CheckPoint key={ index } index={ insideIndex } state={ value } setValue={setValue} createOrRemovePoint={createOrRemovePoint}/>) 
	  				}
	  			)}
	  			<button onClick={createOrRemovePoint.bind(this, outsideIndex, 'create')}>add checkpoint</button>
	   		</section>
	  	)
  	}
}

export default CheckPointsView;