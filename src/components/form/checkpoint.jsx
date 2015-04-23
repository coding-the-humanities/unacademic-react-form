import React from 'react';
import Resource from './resource.jsx';

class Checkpoint extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			hidden: false
		}
	}

	toggleHide(e) {
		this.setState({hidden: !this.state.hidden});
	}

	render(){
		var setValue = this.props.setValue,
			checkpoint = this.props.state,
			outsideIndex = this.props.index,
			createOrRemovePoint = this.props.createOrRemovePoint;

		if (!this.state.hidden) {
		  	return (
		  		<div className="checkpoint">
		  			<div className="checkpointTitle cf">
			  			<h3 > {this.props.index[1]+ 1}: {checkpoint.title} </h3>
				  		<button type="button" className="utility hide" onClick={this.toggleHide.bind(this)}>/\</button>
					  	<button type="button" className="utility minus barButton" onClick={createOrRemovePoint.bind(this, outsideIndex, 'remove', 'checkpoint')}>-</button>
						<button type="button" className="utility plus barButton" onClick={createOrRemovePoint.bind(this, outsideIndex, 'create', 'checkpoint')}>+</button>
				  	</div>
			  		<fieldset>
			  			<div className="checkpointProperties">
				  			<p className="cf"> title: <input value={checkpoint.title} onChange={ setValue.bind(this, outsideIndex, "title") }></input></p>
				  			<p className="cf"> description: <input value={checkpoint.description} onChange={ setValue.bind(this, outsideIndex, "description") }></input></p>
				  			<p className="cf"> instructions: <input value={checkpoint.instructions} onChange={ setValue.bind(this, outsideIndex, "instructions") }></input></p>
					  	</div>
					  	<div className="resourcesContainer">
							<p> Resources: </p>
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
				  		<button type="button" className="utility hide" onClick={this.toggleHide.bind(this)}>\/</button>
					  	<button type="button" className="utility minus barButton" onClick={createOrRemovePoint.bind(this, outsideIndex, 'remove', 'checkpoint')}>-</button>
						<button type="button" className="utility plus barButton" onClick={createOrRemovePoint.bind(this, outsideIndex, 'create', 'checkpoint')}>+</button>
				  	</div>
				</div>
		  	);
		}
  	}
}

export default Checkpoint;