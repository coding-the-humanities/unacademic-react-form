import React from 'react';
import Firebase from '../../node_modules/firebase/lib/firebase-web.js';

import Form from './form/form.jsx';
import WaypointsList from './waypoints-list.jsx';
import Login from './login.jsx';
import Header from './header.jsx';
import Model from '../models/model.jsx';

import css from '../styles/main.css';

class Site extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			userData: "",
			activeWaypoint: 0,
			nesting: 0,
			timeout: 0
		}
	}

	toggleNesting(index, e) {
		if (this.state.nesting == index[1]){
			this.setState({nesting: null}, ()=>{
			}.bind(this));
		} else {
			this.setState({nesting: index[1]}, ()=>{
			}.bind(this));
		}
	}

	componentWillMount(){
		// starting up firebase
		this.firebaseRef = new Firebase('https://unacademic-form.firebaseio.com/');
	}

	authWithFirebase(provider){
		var provider = provider;
		this.firebaseRef.authWithOAuthPopup(provider, function(error, authData){
		  	if (error) {
		    	console.log('Login Failed!', error);
		  	} else {
		  		this.getDataFromFirebase(authData, provider);
		  		console.log(authData);
		  	}
		}.bind(this));
	}

	getDataFromFirebase(authData, provider){
		var authData = authData;
		var uidGenerated = authData[provider].id + "-" + provider;
		this.firebaseRef.child(uidGenerated).on('value', function(data){
				if (data.val() == null){
					let newAccount = new Model.User(uidGenerated, authData[provider].displayName || "");
					console.log('creating new account');
					this.setState({userData: newAccount}, this.updateFirebase);
				} else {
					this.setState({userData: data.val()});
				}
			}.bind(this)
		);
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

	updateUser(event){
		var newValue = event.target.value;
		this.setState(function(state){
			state.userData.name = newValue;
			state.userData.waypoints.map((value, index)=>{
				state.userData.waypoints[index].curator = newValue;
			})
			return {userData: state.userData};
		}, this.updateFirebase);
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

	createOrRemovePoint(index, action, type){
		if (action == 'create') {
			if (type == 'waypoint'){
				var waypointCallback = function (){
					this.updateFirebase();
				};
				this.setState(function(state){
					if (!state.userData.waypoints){state.userData.waypoints = [];}
					state.userData.waypoints.push( new Model.Waypoint(1, 'Zaturrby') );
					return {userData: state.userData};
				}, this.updateFirebase);
			} else if (type == 'checkpoint'){
				this.setState(function(state){
					var checkpoints = state.userData.waypoints[index[0]].checkpoints;

					if (!checkpoints){checkpoints = [];}

					//determine index to splice

					let spliceIndex;

					if (index[1] == 0){
						spliceIndex = 0;
					} else if (!index[1]){
						spliceIndex = checkpoints.length
					} else {
						spliceIndex = index[1];
					}

					checkpoints.splice(spliceIndex, 0, new Model.Checkpoint(1));

					return {userData: state.userData};
				}, this.updateFirebase);
			} else if (type == 'resource'){
				this.setState(function(state){
					if (!state.userData.waypoints[index[0]].checkpoints[index[1]].resources){state.userData.waypoints[index[0]].checkpoints[index[1]].resources = [];}
					state.userData.waypoints[index[0]].checkpoints[index[1]].resources.push(new Model.Resource(1));
					return {userData: state.userData};
				}, this.updateFirebase);
			}
		} 



		else if (action == 'remove'){
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
		  		<main className="cf">
	  				<Header state={userData} updateUser={this.updateUser.bind(this)} />
		  			{	()=>{
		  					if (userData.waypoints){
		  						return (activeWaypoint == userData.waypoints.length) 
			 					? ( <h1> No waypoint selected</h1>)
			 					: ( <Form state={userData.waypoints[activeWaypoint]} index={[activeWaypoint]} setValue={this.setValue.bind(this)} createOrRemovePoint={this.createOrRemovePoint.bind(this)}  nesting={this.state.nesting} toggleNesting={this.toggleNesting.bind(this)}/>);
		  					} else {
			 					return ( <h1> No waypoints</h1>)
		  					}
		  			}()}
		  			<footer>
	                    <h3> Unacademic - Amsterdam </h3>
		  			</footer>
		   		</main>
		  	)
		} else {
			return (
				<main>
		  			<div className="wrapper cf">
	  					<Header state={userData} updateUser={this.updateUser.bind(this)} />
			  			<Login authWithFirebase={this.authWithFirebase.bind(this)} updateUser={this.updateUser.bind(this)} />
			  		</div>
		  			<footer>
	                    <h3> Unacademic - Amsterdam </h3>
		  			</footer>
		  		</main>
			)
		}
  	}
}

React.render(<Site />, document.body);
