import React from 'react';

class Resource extends React.Component {
	render(){
		var resource = this.props.state,
			setValue = this.props.setValue,
			outsideIndex = this.props.index,
			createOrRemovePoint = this.props.createOrRemovePoint;

	  	return (
	  		<fieldset className="resource">
  				<legend> Resource </legend>
	  			<h4>title: <input value={resource.title} onChange={ setValue.bind(this, outsideIndex, "title") }></input></h4>
	  			<p>author: <input value={resource.author} onChange={ setValue.bind(this, outsideIndex, "author") }></input></p>
	  			<p>url: <input value={resource.url} onChange={ setValue.bind(this, outsideIndex, "url") }></input></p>
		  		<button type="button" onClick={createOrRemovePoint.bind(this, outsideIndex, 'remove')}>remove resource</button> 
	   		</fieldset>
	  	)
  	}
}

export default Resource;