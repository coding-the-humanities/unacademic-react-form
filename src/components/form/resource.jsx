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
  				<p className="cf">title: <input maxLength="30" value={resource.title} onChange={ setValue.bind(this, outsideIndex, "title") }></input></p>
  				<p className="cf">author: <input maxLength="100" value={resource.author} onChange={ setValue.bind(this, outsideIndex, "author") }></input></p>
  				<p className="cf">url: <input maxLength="500" value={resource.url} onChange={ setValue.bind(this, outsideIndex, "url") }></input></p>
	  			<div className="cf">	
	  				<p className="cf type">type: <input maxLength="500" value={resource.type} onChange={ setValue.bind(this, outsideIndex, "type") }></input></p>
	  				<p className="cf timeToDigest">Time to digest:
				  		<select value={resource.time_to_digest} onChange={ setValue.bind(this, outsideIndex, "time_to_digest") }>
							<option value="5">5 min</option>
							<option value="10">10 min</option>
							<option value="15">15 min</option>
							<option value="20">20 min</option>
							<option value="25">25 min</option>
							<option value="30">30 min</option>
							<option value="35">35 min</option>
							<option value="40">40 min</option>
							<option value="45">45 min</option>
							<option value="50">50 min</option>
							<option value="55">55 min</option>
							<option value="60">60 min</option>
						</select>
					</p>
				</div>

  				<p>tags: </p>
  				<div className="cf">
	  				<p className="cf tags"><input maxLength="15" value={resource.tags[0]} onChange={ setValue.bind(this, outsideIndex, "tags", 0) }></input></p>
	  				<p className="cf tags"><input maxLength="15" value={resource.tags[1]} onChange={ setValue.bind(this, outsideIndex, "tags", 1) }></input></p>
	  				<p className="cf tags"><input maxLength="15" value={resource.tags[2]} onChange={ setValue.bind(this, outsideIndex, "tags", 2) }></input></p>
	  				<p className="cf tags"><input maxLength="15" value={resource.tags[3]} onChange={ setValue.bind(this, outsideIndex, "tags", 3) }></input></p>
	  				<p className="cf tags"><input maxLength="15" value={resource.tags[4]} onChange={ setValue.bind(this, outsideIndex, "tags", 4) }></input></p>
		  		</div>
		  		<div className="cf">
			  		<p className="cf tags">clarity:
				  		<select value={resource.clarity} onChange={ setValue.bind(this, outsideIndex, "clarity") }>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</select>
					</p>
					<p className="cf tags">difficulty:
				  		<select value={resource.difficulty} onChange={ setValue.bind(this, outsideIndex, "difficulty") }>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</select>
					</p>	
					<p className="cf tags">uptodate:
				  		<select value={resource.uptodateness} onChange={ setValue.bind(this, outsideIndex, "uptodateness") }>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</select>
					</p>	
					<p className="cf tags">pertinence:
				  		<select value={resource.pertinence} onChange={ setValue.bind(this, outsideIndex, "pertinence") }>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</select>
					</p>	
					<p className="cf tags">enjoyment:
				  		<select value={resource.enjoyment} onChange={ setValue.bind(this, outsideIndex, "enjoyment") }>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</select>
					</p>		
		  		</div>
		  		<button type="button" className="utility minus" onClick={createOrRemovePoint.bind(this, outsideIndex, 'remove', 'resource')}>-</button>
	   		</fieldset>
	  	)
  	}
}

export default Resource;
