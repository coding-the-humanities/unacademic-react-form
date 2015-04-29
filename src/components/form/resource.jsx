import React from 'react';


import Tooltip from '../../../node_modules/react-bootstrap/lib/Tooltip.js';
import OverlayTrigger from '../../../node_modules/react-bootstrap/lib/OverlayTrigger.js';


class Resource extends React.Component {
	render(){
		var resource = this.props.state,
			setValue = this.props.setValue,
			outsideIndex = this.props.index,
			createOrRemovePoint = this.props.createOrRemovePoint;

	  	return (
	  		<fieldset className="resource">
				<OverlayTrigger placement='left' overlay={<Tooltip><strong>Holy guacamole!</strong> Check this info.</Tooltip>}>
	  				<p className="cf">title: <input value={resource.title} onChange={ setValue.bind(this, outsideIndex, "title") }></input></p>
				</OverlayTrigger>
				<OverlayTrigger placement='left' overlay={<Tooltip><strong>Holy guacamole!</strong> Check this info.</Tooltip>}>
	  				<p className="cf">author: <input value={resource.author} onChange={ setValue.bind(this, outsideIndex, "author") }></input></p>
				</OverlayTrigger>
				<OverlayTrigger placement='left' overlay={<Tooltip><strong>Holy guacamole!</strong> Check this info.</Tooltip>}>
	  				<p className="cf">url: <input value={resource.url} onChange={ setValue.bind(this, outsideIndex, "url") }></input></p>
				</OverlayTrigger>
		  		<button type="button" className="utility minus" onClick={createOrRemovePoint.bind(this, outsideIndex, 'remove', 'resource')}>-</button> 
	   		</fieldset>
	  	)
  	}
}

export default Resource;