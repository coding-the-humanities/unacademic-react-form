import React from 'react';

class Resource extends React.Component {
	render(){
		var resource = this.props.state;
		console.log(resource);
	  	return (
	  		<div className="waypoints" style={{background: 'darkgreen', marginLeft: '10px'}}>
	  			<h4>{resource.title}</h4> 
	   		</div>
	  	)
  	}
}

export default Resource;