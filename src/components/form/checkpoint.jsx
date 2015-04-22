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
		  		<fieldset className="checkpoint">
		  			<div className="checkpointProperties">
			  			<h3> Checkpoint </h3>
			  			<h3 className="cf"> title: <input value={checkpoint.title} onChange={ setValue.bind(this, outsideIndex, "title") }></input></h3>
			  			<p className="cf"> description <input value={checkpoint.description} onChange={ setValue.bind(this, outsideIndex, "description") }></input></p>
				  		<button type="button" className="utility minus" onClick={createOrRemovePoint.bind(this, outsideIndex, 'remove')}>-</button>
				  	</div>
				  	<div className="resourcesContainer">
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
			  			<button type="button" className="utility hide" onClick={this.toggleHide.bind(this)}>^</button>

		  			</div>
		   		</fieldset>
		  	);
		} else {
			return 
		  		(<fieldset className="checkpoint">
			  		<button type="button" className="utility hide" onClick={this.toggleHide.bind(this)}>^</button>
		   		</fieldset>);
		}
  	}
}

export default Checkpoint;