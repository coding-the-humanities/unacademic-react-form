import React from 'react';

class Resource extends React.Component {
	render(){
	  	return (
	  		<section className="waypoints" style={{background: 'darkgreen', marginLeft: '10px'}}>
	  			<p>With a resource</p> 
	   		</section>
	  	)
  	}
}



class CheckPoint extends React.Component {
	render(){
	  	return (
	  		<section className="checkPoint" style={{background: 'green', marginLeft: '10px'}}>
	  			<p> Im a single checkpoint </p>
	  			<Resource />
	  			<Resource />
	   		</section>
	  	)
  	}
}




class CheckPointsView extends React.Component {
	render(){
	  	return (
	  		<section className="waypoints" style={{background: 'lightgreen'}}>
	  			<p>Im the checkpointsview</p>
	  			<CheckPoint />
	  			<CheckPoint />
	   		</section>
	  	)
  	}
}



class WayPoint extends React.Component {
	render(){
	  	return (
	  		<section className="wayPoint" style={{background: 'blue', marginLeft: '10px'}}>
	  			<p>	Im a single waypoint</p> 
	   		</section>
	  	)
  	}
}




class WayPointsView extends React.Component {
	render(){
	  	return (
	  		<section className="wayPointsView" style={{background: 'lightblue'}}>
	  			<p>Im the Waypoints view</p>
	  			<WayPoint />
	  			<WayPoint />
	   		</section>
	  	)
  	}
}




class LoginView extends React.Component {
	render(){
	  	return (
	  		<section className="loginView" style={{background: 'pink'}}>
	  			<p>Im the login view!</p>
	   		</section>
	  	)
  	}
}




class Site extends React.Component {
	render(){
	  	return (
	  		<main className="site" style={{background: 'lightgrey', width: '400px'}}>

	  			<LoginView />
	  			<WayPointsView />
	  			<CheckPointsView />

	   		</main>
	  	)
  	}
}

React.render(<Site />, document.body);
