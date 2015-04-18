import React from 'react';

class Resource extends React.Component {
	render(){
	  	return (
	  		<section className="waypoints">
	  			<p>With a resource</p> 
	   		</section>
	  	)
  	}
}

class Checkpoint extends React.Component {
	render(){
	  	return (
	  		<section className="checkpoint" style={{background: 'green', marginLeft: '10px'}}>
	  			<p> Im a single checkpoint </p>
	  			<Resource />
	  			<Resource />
	   		</section>
	  	)
  	}
}

class CheckpointsView extends React.Component {
	render(){
	  	return (
	  		<section className="waypoints" style={{background: 'lightgreen'}}>
	  			<p>Im the checkpointsview</p>
	  			<Checkpoint />
	  			<Checkpoint />
	   		</section>
	  	)
  	}
}

class Waypoint extends React.Component {
	render(){
	  	return (
	  		<section className="waypoint" style={{background: 'blue', marginLeft: '10px'}}>
	  			<p>	Im a single waypoint</p> 
	   		</section>
	  	)
  	}
}

class WaypointsView extends React.Component {
	render(){
	  	return (
	  		<section className="waypointsView" style={{background: 'lightblue'}}>
	  			<p>Im the Waypoints view</p>
	  			<Waypoint />
	  			<Waypoint />
	   		</section>
	  	)
  	}
}

class LoginView extends React.Component {
	render(){
	  	return (
	  		<section className="loginView" style={{background: 'pink'}}>
	  			<p>
	  				Im the login view!
	  			</p>
	   		</section>
	  	)
  	}
}

class Site extends React.Component {
	render(){
	  	return (
	  		<main className="site" style={{background: 'lightgrey'}}>

	  			<LoginView />
	  			<WaypointsView />
	  			<CheckpointsView />

	   		</main>
	  	)
  	}
}

React.render(<Site />, document.body);
