import React from 'react';

class Resource extends React.Component {
	render(){
		var resource = this.props.state;
		var setValue = function(){}; 
	  	return (
	  		<div className="resource">
	  			<h4>title: &nbsp;<input className="editable" value={resource.title}></input></h4>
	  			<p>author: <input className="editable" value={resource.author}></input></p>
	  			<p>url: <input className="editable" value={resource.url} onclick={ setValue() }></input></p> 
	   		</div>
	  	)
  	}
}

export default Resource;