import React from 'react';
import Resource from './resource.jsx';

class Checkpoint extends React.Component {
	render(){
		var setValue = this.props.setValue,
			checkpoint = this.props.state,
			outsideIndex = this.props.index,
			createOrRemovePoint = this.props.createOrRemovePoint;

	  	return (
	  		<div className="checkpoint">
	  			<h3> title: <input className="editable" value={checkpoint.title} onChange={ setValue.bind(this, outsideIndex, "title") }></input></h3>
	  			<p> description <input className="editable" value={checkpoint.description} onChange={ setValue.bind(this, outsideIndex, "description") }></input></p>

	  			{ checkpoint.resources.map((value, index) => {

	  				var insideIndex = JSON.parse(JSON.stringify(outsideIndex)); 
	  				insideIndex.push(index); 

	  				return <Resource key={ index } index={ insideIndex } state={ value } setValue={setValue}/>
	  			})}
	  			<button onClick={createOrRemovePoint.bind(this, outsideIndex, 'create')}>add resource</button>
	   		</div>
	  	)
  	}
}

export default Checkpoint;