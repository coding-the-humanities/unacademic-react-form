import React from 'react';

class Login extends React.Component {
	render(){
	  	return (
	  		<section className="login">
	  			<h1>Welcome to the Offcourse First Generation Environment</h1>
	  			<p>This environment offers an interface to enter your waypoint. We have named a traditional course a waypoint, because waypoints help you navigate on the sea. The traditional chapters or levels of a course trajectory we have called checkpoints. So get started on your waypoint for learners to start learning by dwelling. </p>
	  			<p><u>Please log in, we prefer github:</u></p>
	  			<div className="buttonContainer cf">
		  			<button className="authButton github" onClick={ this.props.authWithFirebase.bind(this, 'github') }>github</button>
	  			</div>
	  			<p>But you could also use the more common providers:</p>
	  			<div className="buttonContainer cf">
		  			<button className="authButton facebook" onClick={ this.props.authWithFirebase.bind(this, 'facebook') } >facebook</button>
		  			<button className="authButton twitter" onClick={ this.props.authWithFirebase.bind(this, 'twitter') } >twitter</button>
		  			<button className="authButton google" onClick={ this.props.authWithFirebase.bind(this, 'google') } >google</button>
	   			</div>
	   		</section>
	  	)
  	}
}

export default Login;
