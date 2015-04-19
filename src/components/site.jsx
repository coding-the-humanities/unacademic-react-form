import React from 'react';
import Firebase from '../../node_modules/firebase/lib/firebase-web.js';

import Form from './form/form.jsx';
import WaypointsList from './waypoints-list.jsx';
import Login from './login.jsx';
import Model from '../models/model.jsx';

import css from '../styles/main.css';

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
		// starting up firebase
		this.firebaseRef = new Firebase('https://unacademic-form.firebaseio.com/');
	}

	authWithFirebase(provider){
		this.firebaseRef.authWithOAuthPopup(provider, this.authWithFirebaseCallback.bind(this));	
	}

	authWithFirebaseCallback(error, authData) {
	  	if (error) {
	    	console.log('Login Failed!', error);
	  	} else {
	    	console.log('Authenticated successfully with payload:', authData);
	  		this.getDataFromFirebase(authData);
	  	}
	}

	getDataFromFirebase(authData){
		this.firebaseRef.child('12334').on('value', function(data){
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
			this.firebaseRef.update({[userData.id+2]: userData}, function(){
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
					this.updateFirebase();
				};
				this.setState(function(state){
					if (!state.userData.waypoints){state.userData.waypoints = [];}
					state.userData.waypoints.push( new Model.Waypoint(1, 'Zaturrby') );
					return {userData: state.userData};
				}, this.updateFirebase);
			} else if (index.length == 1){
				// create new checkpoint
				this.setState(function(state){
					if (!state.userData.waypoints[index[0]].checkpoints){state.userData.waypoints[index[0]].checkpoints = [];}
					state.userData.waypoints[index[0]].checkpoints.push(new Model.Checkpoint(1));
					return {userData: state.userData};
				}, this.updateFirebase);
			} else if (index.length == 2){
				// create new resource
				this.setState(function(state){
					if (!state.userData.waypoints[index[0]].checkpoints[index[1]].resources){state.userData.waypoints[index[0]].checkpoints[index[1]].resources = [];}
					state.userData.waypoints[index[0]].checkpoints[index[1]].resources.push(new Model.Resource(1));
					return {userData: state.userData};
				}, this.updateFirebase);
			}
		} 



		else if (action == 'remove'){
			console.log(index);
			if (index.length == 1){
				// Remove the clicked waypoint
				this.setState(function(state){
					state.userData.waypoints.splice(index[0], 1);
					return {userData: state.userData};
				}, this.updateFirebase);
			}
			else if (index.length == 2){
				// Remove the clicked checkpoint
				this.setState(function(state){
					state.userData.waypoints[index[0]].checkpoints.splice(index[1], 1);
					return {userData: state.userData};
				}, this.updateFirebase);
			}
			else if (index.length == 3){
				// Remove the clicked checkpoint
				this.setState(function(state){
					state.userData.waypoints[index[0]].checkpoints[index[1]].resources.splice(index[2], 1);
					return {userData: state.userData};
				}, this.updateFirebase);
			}
				
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
		  		<main>
		  			
		  			<h1>Unacademic temporary unstyled curating interface</h1>

		  			<Login state={userData}/>
		  			<WaypointsList state={userData} setActiveWaypoint={this.setActiveWaypoint.bind(this)} createOrRemovePoint={this.createOrRemovePoint.bind(this)}/>
		  			{	()=>{
		  					if (userData.waypoints){
		  						return (activeWaypoint == userData.waypoints.length) 
			 					? ( <h1> No waypoint selected</h1>)
			 					: ( <Form state={userData.waypoints[activeWaypoint]} index={[activeWaypoint]} setValue={this.setValue.bind(this)} createOrRemovePoint={this.createOrRemovePoint.bind(this)}/>);
		  					} else {
			 					return ( <h1> No waypoints</h1>)
		  					}
		  			}()}
		   		</main>
		  	)
		} else {
			return (
				<main>
			  		<h1>Unacademic temporary unstyled curating interface</h1>
		  			<Login authWithFirebase={this.authWithFirebase.bind(this)}/>
		  		</main>
			)
		}
  	}
}

React.render(<Site />, document.body);
