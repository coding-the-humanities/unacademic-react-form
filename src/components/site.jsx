import React from 'react';
import Firebase from '../../node_modules/firebase/lib/firebase-web.js';
import cssBootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.css';

import Tooltip from '../../node_modules/react-bootstrap/lib/Tooltip.js';
import OverlayTrigger from '../../node_modules/react-bootstrap/lib/OverlayTrigger.js';


import Form from './form/form.jsx';
import Login from './login.jsx';
import Header from './header.jsx';
import Model from '../models/model.jsx';

import cssMain from '../styles/main.css';


class Site extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			userData: "",
			activeWaypoint: 0,
			nesting: 0,
			view: 'auth',
			timeout: 0
		}
	}

	componentWillMount(){
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
		var uidGenerated = authData[provider].id + '-' + provider;
		this.firebaseRef.child(uidGenerated).on('value', function(data){
				if (data.val() == null){
					let newAccount = new Model.User(uidGenerated, authData[provider].displayName || "");
					console.log('creating new account');
					this.setState({userData: newAccount}, this.updateFirebase);
					this.setView('profile');
				} else {
					this.setState({userData: data.val()} );
					this.setView(()=> {
						if (this.state.view == 'auth') {
							return 'waypoint';
						} else {
							return this.state.view;
						}
					}());
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

	updateUser(type, event){
		var newValue = event.target.value;
		if (type == 'name') {
			this.setState(function(state){
				state.userData.name = newValue;
				state.userData.waypoints.map((value, index)=>{
					state.userData.waypoints[index].curator = newValue;
				})
				return {userData: state.userData};
			}, this.updateFirebase);
		} else if (type == 'institution'){
			this.setState(function(state){
				state.userData.institution = newValue;
				return {userData: state.userData};
			}, this.updateFirebase);
		} else if (type == 'description'){
			this.setState(function(state){
				state.userData.description = newValue;
				return {userData: state.userData};
			}, this.updateFirebase);
		}
	}

	setValue(index, fieldType, fieldIsArray, event){
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
			console.log(typeof fieldIsArray)
			if (typeof fieldIsArray != 'number') {
				this.setState(function(state){
					state.userData.waypoints[index[0]].checkpoints[index[1]].resources[index[2]][fieldType] = newValue;
					return {userData: state.userData};
				}, this.updateFirebase);
			} else {
				this.setState(function(state){
					state.userData.waypoints[index[0]].checkpoints[index[1]].resources[index[2]][fieldType][fieldIsArray] = newValue;
					return {userData: state.userData};
				}, this.updateFirebase);
			}
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

	toggleNesting(index, e) {
		if (this.state.nesting == index[1]){
			this.setState({nesting: null}, ()=>{
			}.bind(this));
		} else {
			this.setState({nesting: index[1]}, ()=>{
			}.bind(this));
		}
	}

	setActiveWaypoint(index){
		this.setState(function(state){
			return {activeWaypoint: index};
		});
	}

	setView(view){
		this.setState({view: view});
	}

	render(){

		var userData = this.state.userData,
			activeWaypoint = this.state.activeWaypoint;

		if (this.state.view == 'waypoint'){
		  	return (
		  		<main className="cf">
	  				<Header state={userData} setView={this.setView.bind(this)}/>
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
	                    <h3> Unacademic_</h3>
		  			</footer>
		   		</main>
		  	)
		} else if (this.state.view == 'auth') {
			return (
				<main>
		  			<div className="wrapper cf">
	  					<Header state={userData} setView={this.setView.bind(this)}/>
			  			<Login authWithFirebase={this.authWithFirebase.bind(this)} updateUser={this.updateUser.bind(this)} />
			  		</div>
		  			<footer>
                    	<h3> Unacademic_ </h3>
		  			</footer>
		  		</main>
			)
		} else if (this.state.view == 'profile') {
			return (
				<main>
		  			<div className="wrapper cf">
	  					<Header state={userData} setView={this.setView.bind(this)}/>
		  					<section className="profile">
								<p className="cf"> name: <input maxLength="30" className="loginInput" onChange={this.updateUser.bind(this, 'name')} value={userData.name} /></p>
								<p className="cf"> institution: <input maxLength="100" className="loginInput" onChange={this.updateUser.bind(this, 'institution')} value={userData.institution} /></p>
								<p className="cf "> description: <textarea maxLength="500" className="loginInput bio" onChange={this.updateUser.bind(this, 'description')} value={userData.description} /></p>
								<button bsStyle='primary' bsSize='large' onClick={ this.setView.bind(this, 'waypoint') }> Submit and take me back to my waypoint </button>
		  					</section>
			  		</div>
		  			<footer>
	                    <h3> Unacademic_ </h3>
		  			</footer>
		  		</main>
			)
		}

  	}
}

React.render(<Site />, document.body);
