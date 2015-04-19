import React from 'react';
import Firebase from '../node_modules/firebase/lib/firebase-web.js';

import CheckPointsView from './check-points-view.jsx';
import WayPointsView from './way-points-view.jsx';
import LoginView from './login.jsx';
import data from './dataEmpty.jsx';

import css from './styles/main.css';

class Site extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			userData: "",
			activeWaypoint: 0,
		}
	}

	componentWillMount(){
		this.firebaseRef = new Firebase('https://unacademic-form.firebaseio.com/');
		this.firebaseRef.child('123322').on('value', function(data){
			this.setState({userData: data.val()}, function(){console.log(this.state)});
			this.setState({activeWaypoint: 0});
		}.bind(this));
	}

	updateFirebase(){
		var userData = this.state.userData;
		this.firebaseRef.update({[userData.id]: userData}, function(){console.log("database updated")});
	}

	setValue(index, fieldType, event){
		var newValue = event.target.value,
			fieldType = fieldType;
		if (index.length == 1){
			this.setState(function(state){
				state.userData.waypoints[index[0]][fieldType] = newValue;
				return {userData: state.userData};
			}, this.updateFirebase);
		} else if (index.length == 2){
			this.setState(function(state){
				state.userData.waypoints[index[0]].checkpoints[index[1]][fieldType] = newValue;
				return {userData: state.userData};
			}, this.updateFirebase);
		} else if (index.length == 3){
			this.setState(function(state){
				state.userData.waypoints[index[0]].checkpoints[index[1]].resources[index[2]][fieldType] = newValue;
				return {userData: state.userData};
			}, this.updateFirebase);
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
			}, this.updateFirebase);
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
			}, this.updateFirebase);
		} else if (index.length == 2){
			this.setState(function(state){
				state.userData.waypoints[index[0]].checkpoints[index[1]].resources.push({
                    "id": 1,
                    "title": "",
                    "author": "",
                    "url": ""
				});
				return {userData: state.userData};
			}, this.updateFirebase);
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

		if (this.state.userData != ""){
		  	return (
		  		<main className="siteContainer">
		  			
		  			<h1>Unacademic Temporary Curating Interface</h1>

		  			<LoginView state={userData}/>
		  			<WayPointsView state={userData} setActiveWaypoint={this.setActiveWaypoint.bind(this)} createNewPoint={this.createNewPoint.bind(this)}/>
		  			<CheckPointsView state={userData.waypoints[activeWaypoint]} index={[activeWaypoint]} setValue={setValue.bind(this)} createNewPoint={this.createNewPoint.bind(this)}/>
		   		
		   		</main>
		  	)
		} else {
			return <h1>loaaading!</h1>
		}
  	}
}

React.render(<Site />, document.body);
