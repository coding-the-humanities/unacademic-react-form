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
				email: 'somethingelse@gmail.com',
				waypoints: data
			},
			activeWaypoint: 0,
		}
	}
	render(){
		var userData = this.state.userData,
			activeWaypoint = this.state.activeWaypoint;
	  	return (
	  		<main className="site" style={{background: 'lightgrey', width: '800px', padding: '10px', margin: '0 auto'}}>
	  			
	  			<h1 contentEditable="true">Welcome to Unacademic Curating Interface</h1>

	  			<LoginView state={userData}/>
	  			<WayPointsView state={userData} />
	  			<CheckPointsView state={userData.waypoints[activeWaypoint]} />
	   		</main>
	  	)
  	}
}

React.render(<Site />, document.body);
