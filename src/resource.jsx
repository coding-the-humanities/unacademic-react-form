import React from 'react';

class Resource extends React.Component {
	render(){
		var resource = this.props.state;
	  	return (
	  		<div className="resource">
	  			<h4>title: &nbsp;<span className="editable" contentEditable="true">{resource.title}</span></h4>
	  			<p>author: <span className="editable" contentEditable="true">{resource.author}</span></p>
	  			<p>url: <span className="editable" contentEditable="true">{resource.url}</span></p> 
	   		</div>
	  	)
  	}
}

export default Resource;