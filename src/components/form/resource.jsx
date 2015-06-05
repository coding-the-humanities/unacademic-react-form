import React from 'react';


import Tooltip from '../../../node_modules/react-bootstrap/lib/Tooltip.js';
import OverlayTrigger from '../../../node_modules/react-bootstrap/lib/OverlayTrigger.js';


class Resource extends React.Component {
	render(){
		var resource = this.props.state,
			setValue = this.props.setValue,
			outsideIndex = this.props.index,
			createOrRemovePoint = this.props.createOrRemovePoint;

		console.log(resource.tags)	
	  	return (
	  		<fieldset className="resource">
  				<p className="cf">title: <input maxLength="30" value={resource.title} onChange={ setValue.bind(this, outsideIndex, "title") }></input></p>
  				<p className="cf">author: <input maxLength="100" value={resource.author} onChange={ setValue.bind(this, outsideIndex, "author") }></input></p>
  				<p className="cf">url: <input maxLength="500" value={resource.url} onChange={ setValue.bind(this, outsideIndex, "url") }></input></p>
  				<p className="cf">type: <input maxLength="500" value={resource.type} onChange={ setValue.bind(this, outsideIndex, "type") }></input></p>
  				<p className="cf tags">tags: <input maxLength="500" value={resource.tags[0]} onChange={ setValue.bind(this, outsideIndex, "tags", 0) }></input></p>
  				<p className="cf tags">tags: <input maxLength="500" value={resource.tags[1]} onChange={ setValue.bind(this, outsideIndex, "tags", 1) }></input></p>
  				<p className="cf tags">tags: <input maxLength="500" value={resource.tags[2]} onChange={ setValue.bind(this, outsideIndex, "tags", 2) }></input></p>
  				<p className="cf tags">tags: <input maxLength="500" value={resource.tags[3]} onChange={ setValue.bind(this, outsideIndex, "tags", 3) }></input></p>
  				<p className="cf tags">tags: <input maxLength="500" value={resource.tags[4]} onChange={ setValue.bind(this, outsideIndex, "tags", 4) }></input></p>
		  		<button type="button" className="utility minus" onClick={createOrRemovePoint.bind(this, outsideIndex, 'remove', 'resource')}>-</button>
	   		</fieldset>
	  	)
  	}
}

export default Resource;
