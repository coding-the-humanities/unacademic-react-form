import React from 'react';

import Checkpoint from './checkpoint.jsx';

import Modal from '../../../node_modules/react-bootstrap/lib/Modal.js';
import ModalTrigger from '../../../node_modules/react-bootstrap/lib/ModalTrigger.js';
import Tooltip from '../../../node_modules/react-bootstrap/lib/Tooltip.js';
import OverlayTrigger from '../../../node_modules/react-bootstrap/lib/OverlayTrigger.js';

const ImgModal = React.createClass({
  render() {
    return (
      <Modal {...this.props} title='Actual Offcourse Interface' animation={false}>
        <div className='modal-body'>
			<img src={require("../../assets/unacReal.png")} className="unacScreenshotModal"/>
        </div>   
      </Modal>
    );
  }
});

class Form extends React.Component {

	render(){
		var setValue = this.props.setValue,
			waypoint = this.props.state,
			outsideIndex = this.props.index,
			createOrRemovePoint = this.props.createOrRemovePoint;

	  	return (
	  		<form className="form">
	  			<div className="wayPointContainer cf">
		  			<fieldset className="waypoint">
			  			<legend><h1>Waypoint:</h1></legend>
		  				<p className="cf"><label>title: </label><input maxLength="30" value={waypoint.title} onChange={ setValue.bind(this, outsideIndex, "title") }></input></p>
		  				<p className="cf"><label>summary: </label><input maxLength="100" value={waypoint.summary} onChange={ setValue.bind(this, outsideIndex, "summary") }></input></p>
		  				<p className="cf"><label>description: </label><textarea maxLength="500" value={waypoint.description} onChange={ setValue.bind(this, outsideIndex, "description") }></textarea></p>
			  		</fieldset>
			  		<imgModal />
			  		<ModalTrigger modal={<ImgModal />}>
		  				<img src={require("../../assets/unacReal.png")} className="unacScreenshot"/>
		  			</ModalTrigger>
			  	</div>

	  			<p className="checkpointContainer"> Checkpoints: (5 max)</p>

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
