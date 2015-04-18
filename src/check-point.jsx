import React from 'react';
import Resource from './resource.jsx';

class CheckPoint extends React.Component {
	render(){
		var checkpoint = this.props.state;
	  	return (
	  		<div className="checkPoint" style={{background: 'green', marginLeft: '10px'}}>
	  			<h3> title: {checkpoint.title} </h3>
	  			<p> description {checkpoint.description}</p>
	  			{ checkpoint.resources.map((value, index) => <Resource key={ index } index={ index } state={ value }/>) }
	   		</div>
	  	)
  	}
}

export default CheckPoint;