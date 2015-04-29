import React from 'react';
import Resource from './resource.jsx';

import Tooltip from '../../../node_modules/react-bootstrap/lib/Tooltip.js';
import OverlayTrigger from '../../../node_modules/react-bootstrap/lib/OverlayTrigger.js';


class Checkpoint extends React.Component {

	render(){
		var setValue = this.props.setValue,
			checkpoint = this.props.state,
			outsideIndex = this.props.index,
			createOrRemovePoint = this.props.createOrRemovePoint;

		if (this.props.nesting == outsideIndex[1]) {
		  	return (
		  		<div className="checkpoint">
		  			<div className="checkpointTitle cf">
			  			<h3 > {this.props.index[1]+ 1}: {checkpoint.title} </h3>
				  		<button type="button" className="utility hideCheckpoint" onClick={this.props.toggleNesting.bind(this, outsideIndex)}>/\</button>
					  	<button type="button" className="utility minus barButton" onClick={createOrRemovePoint.bind(this, outsideIndex, 'remove', 'checkpoint')}>-</button>
						<button type="button" className="utility plus barButton" onClick={createOrRemovePoint.bind(this, outsideIndex, 'create', 'checkpoint')}>+</button>
				  	</div>
			  		<fieldset>
			  			<div className="checkpointProperties">
							<OverlayTrigger placement='right' overlay={<Tooltip><strong>Holy guacamole!</strong> Check this info.</Tooltip>}>
				  				<p className="cf"> title: <input value={checkpoint.title} onChange={ setValue.bind(this, outsideIndex, "title") }></input></p>
		  					</OverlayTrigger>
							<OverlayTrigger placement='right' overlay={<Tooltip><strong>Holy guacamole!</strong> Check this info.</Tooltip>}>
				  				<p className="cf"> description: <input value={checkpoint.description} onChange={ setValue.bind(this, outsideIndex, "description") }></input></p>
		  					</OverlayTrigger>
							<OverlayTrigger placement='right' overlay={<Tooltip><strong>Holy guacamole!</strong> Check this info.</Tooltip>}>
				  				<p className="cf"> instructions: <textarea value={checkpoint.instructions} onChange={ setValue.bind(this, outsideIndex, "instructions") }></textarea></p>
		  					</OverlayTrigger>
					  	</div>
					  	<div className="resourcesContainer">
							<p> Reference: </p>
					  		{()=>{
			  					return (typeof checkpoint.resources == 'undefined')
					 				? ( <p> No resources </p>)
					 				: (
										checkpoint.resources.map((value, index) => {

							  				var insideIndex = JSON.parse(JSON.stringify(outsideIndex));
							  				insideIndex.push(index);

							  				return <Resource key={ index } index={ insideIndex } state={ value } setValue={setValue} createOrRemovePoint={createOrRemovePoint}/>
							  			})
					  				)
					  			;
				  			}()}
				  			<button type="button" className="utility plus something" onClick={createOrRemovePoint.bind(this, outsideIndex, 'create', 'resource')}>+</button>
			  			</div>
			   		</fieldset>
		   		</div>
		  	);
		} else {
			return (
		  		<div className="checkpoint">
		  			<div className="checkpointTitle cf">
			  			<h3 > {this.props.index[1]+ 1}: {checkpoint.title} </h3>
				  		<button type="button" className="utility hideCheckpoint" onClick={this.props.toggleNesting.bind(this, outsideIndex)}>\/</button>
					  	<button type="button" className="utility minus barButton" onClick={createOrRemovePoint.bind(this, outsideIndex, 'remove', 'checkpoint')}>-</button>
						<button type="button" className="utility plus barButton" onClick={createOrRemovePoint.bind(this, outsideIndex, 'create', 'checkpoint')}>+</button>
				  	</div>
				</div>
		  	);
		}
  	}
}

export default Checkpoint;
