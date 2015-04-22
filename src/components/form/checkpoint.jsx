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
				  		<button type="button" className="utility hide" onClick={this.toggleHide.bind(this)}>\/</button>
				  	</div>
			  		<fieldset>
			  			<div className="checkpointProperties">
				  			<p className="cf"> title: <input value={checkpoint.title} onChange={ setValue.bind(this, outsideIndex, "title") }></input></p>
				  			<p className="cf"> description <input value={checkpoint.description} onChange={ setValue.bind(this, outsideIndex, "description") }></input></p>
					  		<button type="button" className="utility minus" onClick={createOrRemovePoint.bind(this, outsideIndex, 'remove')}>-</button>
					  	</div>
					  	<div className="resourcesContainer">
							<p> Resource: </p>
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
				  			<button type="button" className="utility plus" onClick={createOrRemovePoint.bind(this, outsideIndex, 'create')}>+</button>
			  			</div>
			   		</fieldset>
		   		</div>
		  	);
		} else {
			return (
		  		<div className="checkpoint">
		  			<div className="checkpointH3">
			  			<h3 > {this.props.index[1]+ 1}: {checkpoint.title} </h3>  		
				  		<button type="button" className="utility hide" onClick={this.toggleHide.bind(this)}>\/</button>
				  	</div>
				</div>
		  	);
		}
  	}
}

export default Checkpoint;