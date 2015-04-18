import React from 'react';
import Resource from './resource.jsx';

class CheckPoint extends React.Component {
	render(){
	  	return (
	  		<div className="checkPoint" style={{background: 'green', marginLeft: '10px'}}>
	  			<p> Im a single checkpoint </p>
	  			<Resource />
	  			<Resource />
	   		</div>
	  	)
  	}
}

export default CheckPoint;