import React from 'react';

import CheckPoint from './check-point.jsx';

class CheckPointsView extends React.Component {
	render(){
	  	return (
	  		<section className="waypoints" style={{background: 'lightgreen'}}>
	  			<p>Im the checkpointsview</p>
	  			<CheckPoint />
	  			<CheckPoint />
	   		</section>
	  	)
  	}
}

export default CheckPointsView;