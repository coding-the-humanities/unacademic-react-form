import React from 'react';

import CheckPoint from './check-point.jsx';

class CheckPointsView extends React.Component {
	render(){
		var setValue = this.props.setValue,
			waypoints = this.props.state,
			outsideIndex = this.props.index;

	  	return (
	  		<section className="checkpointsView">
	  			<h2> Checkpoints: </h2>
	  			
	  			{ waypoints.checkpoints.map((value, index) => {

	  				// make deepcopy and push -- Can without doubt be done better
	  				var insideIndex = JSON.parse(JSON.stringify(outsideIndex)); 
	  				insideIndex.push(index); 

	  				return (<CheckPoint key={ index } index={ insideIndex } state={ value } setValue={setValue}/>) 
	  				}
	  			)}
	   		</section>
	  	)
  	}
}

export default CheckPointsView;