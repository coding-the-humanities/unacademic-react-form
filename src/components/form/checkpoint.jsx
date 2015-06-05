import React from 'react';
import Resource from './resource.jsx';

import Tooltip from '../../../node_modules/react-bootstrap/lib/Tooltip.js';
import OverlayTrigger from '../../../node_modules/react-bootstrap/lib/OverlayTrigger.js';


class Checkpoint extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			list: ["he","ne"]
		}
	}

	updateHigherState() {
		this.props.setValue.bind(this, this.props.index, "instructions", {target: {value: this.state.list}})
	}

	setLocalValue(index, e){
		var newValue = event.target.value;
		this.setState((oldState) => {
			oldState.list[index] = newValue;
			return {list: oldState.list}
		}, this.updateHigherState)

	}

	addListItem(){
		this.setState(function(oldState){
			let newState = oldState.list.push("");
			return newState;
		});
	}

	removeListItem(spliceIndex, e){
		this.setState(function(oldState){
			let newState = oldState.list.splice(spliceIndex, 1);
			return newState;
		});
		e.preventDefault();
	}

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
			  				<p className="cf"> title: <input maxLength="30" value={checkpoint.title} onChange={ setValue.bind(this, outsideIndex, "title") }></input></p>
			  				<p className="cf"> introduction: <textarea maxLength="100" value={checkpoint.introduction} onChange={ setValue.bind(this, outsideIndex, "introduction") }></textarea></p>
			  				<p>instructions: </p>
			  				{checkpoint.instructions.map((value, index) => {
		  						return (
		  							<p key={index} className="cf">
		  								<input className="instructions" maxLength="500" value={checkpoint.instructions[index]} onChange={ this.setLocalValue.bind(this, index) }></input>
		  								<button className="utility plus small" onClick={ this.removeListItem.bind(this, index) }>-</button>
		  							</p>
		  						)
		  					})}
				  			<button type="button" className="utility plus" onClick={this.addListItem.bind(this)}>+</button>
					  	</div>
					  	<div className="resourcesContainer">
							<p> References: (3 max)</p>
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
				  			<button type="button" className="utility plus" onClick={createOrRemovePoint.bind(this, outsideIndex, 'create', 'resource')}>+</button>
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
