import React from 'react';

class Resource extends React.Component {
	render(){
		var resource = this.props.state,
			setValue = this.props.setValue,
			outsideIndex = this.props.index,
			createOrRemovePoint = this.props.createOrRemovePoint;

	  	return (
	  		<div className="resource">
	  			<h4>title: <input className="editable" value={resource.title} onChange={ setValue.bind(this, outsideIndex, "title") }></input></h4>
	  			<p>author: <input className="editable" value={resource.author} onChange={ setValue.bind(this, outsideIndex, "author") }></input></p>
	  			<p>url: <input className="editable" value={resource.url} onChange={ setValue.bind(this, outsideIndex, "url") }></input></p>
		  		<button onClick={createOrRemovePoint.bind(this, outsideIndex, 'remove')}>remove resource</button> 
	   		</div>
	  	)
  	}
}

export default Resource;