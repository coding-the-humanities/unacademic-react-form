import React from 'react';

class Resource extends React.Component {
	render(){
		var resource = this.props.state,
			setValue = this.props.setValue,
			outsideIndex = this.props.index;

		// function(e){console.table(e.target.value);};

	  	return (
	  		<div className="resource">
	  			<h4>title: <input className="editable" defaultValue={resource.title} onChange={ setValue.bind(this, outsideIndex) }></input></h4>
	  			<p>author: <input className="editable" defaultValue={resource.author} onChange={ setValue.bind(this, outsideIndex) }></input></p>
	  			<p>url: <input className="editable" defaultValue={resource.url} onChange={ setValue.bind(this, outsideIndex) }></input></p> 
	   		</div>
	  	)
  	}
}

export default Resource;