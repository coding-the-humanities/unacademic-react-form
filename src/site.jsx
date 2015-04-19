import React from 'react';

import CheckPointsView from './check-points-view.jsx';
import WayPointsView from './way-points-view.jsx';
import LoginView from './login.jsx';
import data from './data.jsx';

import css from './styles/main.css';

class Site extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			userData: {
				id: 1,
				name: 'Mr. Snotneus',
				email: 'somethingelse@example.com',
				waypoints: data
			},
			activeWaypoint: 0,
		}
	}

	setValue(index, fieldType, event){
		var newValue = event.target.value,
			fieldType = fieldType;
		if (index.length == 1){
			this.setState(function(state){
				state.userData.waypoints[index[0]][fieldType] = newValue;
				return {userData: state.userData};
			});
		} else if (index.length == 2){
			this.setState(function(state){
				state.userData.waypoints[index[0]].checkpoints[index[1]][fieldType] = newValue;
				return {userData: state.userData};
			});
		} else if (index.length == 3){
			this.setState(function(state){
				state.userData.waypoints[index[0]].checkpoints[index[1]].resources[index[2]][fieldType] = newValue;
				return {userData: state.userData};
			});
		}
	}

	createNewPoint(index){
		if (index.length == 0){
			var waypointCallback = function (){
				this.setActiveWaypoint(this.state.userData.waypoints.length-1);
			};
			this.setState(function(state){
				state.userData.waypoints.push({
			        "id": 1,
			        "title": "",
			        "image": "http://lorempixel.com/640/480/nature",
			        "curator": "Yeehaa",
			        "summary": "",
			        "description": [
			            ""
			        ],
			        "checkpoints": [
			            {
			                "id": 1,
			                "title": "",
			                "description": [
			                    ""
			                ],
			                "resources": [
			                    {
			                        "id": 1,
			                        "title": "",
			                        "author": "",
			                        "url": ""
			                    }
			                ]
			            }
			        ]
				});
				return {userData: state.userData};
			}, waypointCallback);
		} else if (index.length == 1){
			this.setState(function(state){
				state.userData.waypoints[index[0]].checkpoints.push({
	                "id": 1,
	                "title": "",
	                "description": [
	                    ""
	                ],
	                "resources": [
	                    {
	                        "id": 1,
	                        "title": "",
	                        "author": "",
	                        "url": ""
	                    }
	                ]
				});
				return {userData: state.userData};
			});
		} else if (index.length == 2){
			this.setState(function(state){
				state.userData.waypoints[index[0]].checkpoints[index[1]].resources.push({
                    "id": 1,
                    "title": "",
                    "author": "",
                    "url": ""
				});
				return {userData: state.userData};
			});
		}
	}

	setActiveWaypoint(index){
		this.setState(function(state){
			return {activeWaypoint: index};
		});
	}

	render(){
		var userData = this.state.userData,
			activeWaypoint = this.state.activeWaypoint,
			setValue = this.setValue;

	  	return (
	  		<main className="siteContainer">
	  			
	  			<h1>Unacademic Temporary Curating Interface</h1>

	  			<LoginView state={userData}/>
	  			<WayPointsView state={userData} setActiveWaypoint={this.setActiveWaypoint.bind(this)} createNewPoint={this.createNewPoint.bind(this)}/>
	  			<CheckPointsView state={userData.waypoints[activeWaypoint]} index={[activeWaypoint]} setValue={setValue.bind(this)} createNewPoint={this.createNewPoint.bind(this)}/>
	   		
	   		</main>
	  	)
  	}
}

React.render(<Site />, document.body);
