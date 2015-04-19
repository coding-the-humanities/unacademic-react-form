import React from 'react';

import CheckPoint from './check-point.jsx';
import WaypointChangable from './way-point-changable.jsx';

class CheckPointsView extends React.Component {
	render(){
		var setValue = this.props.setValue,
			waypoint = this.props.state,
			outsideIndex = this.props.index,
			createOrRemovePoint = this.props.createOrRemovePoint;

	  	return (
	  		<section className="checkpointsView">
	  			<WaypointChangable state={waypoint} setValue={setValue} index={outsideIndex}/>
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