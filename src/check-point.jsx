import React from 'react';
import Resource from './resource.jsx';

class CheckPoint extends React.Component {
	render(){
	  	return (
	  		<div className="checkPoint" style={{background: 'green', marginLeft: '10px'}}>
	  			<h4> {this.props.state.title} </h4>
	  			{ this.props.state.resources.map((value, index) => <Resource key={ index } index={ index } state={ value }/>) }

	  			<Resource />
	  			<Resource />
	   		</div>
	  	)
  	}
}

export default CheckPoint;