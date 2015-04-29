import React from 'react';

import Checkpoint from './checkpoint.jsx';

import Tooltip from '../../../node_modules/react-bootstrap/lib/Tooltip.js';
import OverlayTrigger from '../../../node_modules/react-bootstrap/lib/OverlayTrigger.js';


class Form extends React.Component {

	render(){
		var setValue = this.props.setValue,
			waypoint = this.props.state,
			outsideIndex = this.props.index,
			createOrRemovePoint = this.props.createOrRemovePoint;

	  	return (
	  		<form className="form">
	  			<fieldset className="waypoint">
		  			<legend><h1>Waypoint:</h1></legend>
					<OverlayTrigger placement='right' overlay={<Tooltip><strong>Holy guacamole!</strong> Check this info.</Tooltip>}>
		  				<p className="cf"><label>title: </label><input value={waypoint.title} onChange={ setValue.bind(this, outsideIndex, "title") }></input></p>
		  			</OverlayTrigger>
					<OverlayTrigger placement='right' overlay={<Tooltip><strong>Holy guacamole!</strong> Check this info.</Tooltip>}>
		  				<p className="cf"><label>summary: </label><input value={waypoint.summary} onChange={ setValue.bind(this, outsideIndex, "summary") }></input></p>
		  			</OverlayTrigger>
					<OverlayTrigger placement='right' overlay={<Tooltip><strong>Holy guacamole!</strong> Check this info.</Tooltip>}>
		  				<p className="cf"><label>description: </label><textarea value={waypoint.description} onChange={ setValue.bind(this, outsideIndex, "description") }></textarea></p>
		  			</OverlayTrigger>
		  		</fieldset>

	  			<p className="checkpointContainer"> Checkpoints: </p>

	  			{()=>{
  					return (typeof waypoint.checkpoints == 'undefined') 
		 				? ( <div className="checkpoint"><div className="checkpointProperties"><p> No checkpoints </p></div></div>) 
		 				: (
				  			waypoint.checkpoints.map((value, index) => {

				  				// make deepcopy and push -- Can without doubt be done better
				  				var insideIndex = JSON.parse(JSON.stringify(outsideIndex)); 
				  				insideIndex.push(index); 
				  				return (
				  					<Checkpoint key={ index } index={ insideIndex } state={ value } setValue={setValue} createOrRemovePoint={createOrRemovePoint} nesting={this.props.nesting} toggleNesting={this.props.toggleNesting}/>
				  					) 
				  			}.bind(this))
		  				)
		  			;
	  			}.bind(this)()}

  				<button type="button" className="utility plus" onClick={createOrRemovePoint.bind(this, outsideIndex, 'create', 'checkpoint')}>+</button>
	   		</form>
	  	)
  	}
}

export default Form;