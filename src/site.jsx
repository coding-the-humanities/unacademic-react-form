import React from 'react';
import Firebase from '../node_modules/firebase/lib/firebase-web.js';

import CheckPointsView from './full-waypoint.jsx';
import WayPointsView from './way-points-list.jsx';
import LoginView from './login.jsx';
import model from './models/model.jsx';

import css from './styles/main.css';

class Site extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			userData: "",
			activeWaypoint: 0,
			timeout: 0
		}
	}

	componentWillMount(){
		// starting up firebase and loading data
		this.firebaseRef = new Firebase('https://unacademic-form.firebaseio.com/');
		this.firebaseRef.child('123322').on('value', function(data){
			this.setState({userData: data.val()});
		}.bind(this));
	}

	updateFirebase(){
		// Update firebase. 
		// To save connections and data only one update at a time.
		var userData = this.state.userData;
		if (this.state.timeout == 0){
			this.setState({timeout: 1});
			console.log('submitting');
			this.firebaseRef.update({[userData.id]: userData}, function(){
					console.log('database updated');
					this.setState({timeout: 0});
				}.bind(this)
			);
		}
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

	createOrRemovePoint(index, action){
		if (action == 'create') {
			if (index.length == 0){
				// Create new waypoint and set it to active when created
				var waypointCallback = function (){
					this.setActiveWaypoint(this.state.userData.waypoints.length-1);
					this.updateFirebase();
				};
				this.setState(function(state){
					state.userData.waypoints.push( new model.Waypoint(1, 'Zaturrby') );
					return {userData: state.userData};
				}, waypointCallback);
			} else if (index.length == 1){
				// create new checkpoint
				this.setState(function(state){
					state.userData.waypoints[index[0]].checkpoints.push(new model.Checkpoint(1));
					return {userData: state.userData};
				}, this.updateFirebase);
			} else if (index.length == 2){
				// create new resource
				this.setState(function(state){
					state.userData.waypoints[index[0]].checkpoints[index[1]].resources.push(new model.Resource(1));
					return {userData: state.userData};
				}, this.updateFirebase);
			}
		} else if (action == 'remove'){

		}
	}

	setActiveWaypoint(index){
		this.setState(function(state){
			return {activeWaypoint: index};
		});
	}

	render(){
		if (this.state.userData != ""){

			var userData = this.state.userData,
				activeWaypoint = this.state.activeWaypoint;

		  	return (
		  		<main className="siteContainer">
		  			
		  			<h1>Unacademic temporary unstyled curating interface</h1>

		  			<LoginView state={userData}/>
		  			<WayPointsView state={userData} setActiveWaypoint={this.setActiveWaypoint.bind(this)} createOrRemovePoint={this.createOrRemovePoint.bind(this)}/>
		  			<CheckPointsView state={userData.waypoints[activeWaypoint]} index={[activeWaypoint]} setValue={this.setValue.bind(this)} createOrRemovePoint={this.createOrRemovePoint.bind(this)}/>
		   		
		   		</main>
		  	)
		} else {
			return <h1>loaaading!</h1>
		}
  	}
}

React.render(<Site />, document.body);
