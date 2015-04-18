import React from 'react';

class WayPoint extends React.Component {
	render(){
	  	return (
	  		<div className="wayPoint" style={{background: 'blue', marginLeft: '10px'}}>
	  			<h4>{this.props.state.title}</h4>
	  			<p>{this.props.state.description}</p>
	   		</div>
	  	)
  	}
}

export default WayPoint;