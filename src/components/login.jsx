import React from 'react';

class Login extends React.Component {
	render(){
		if (typeof this.props.state == 'undefined'){
		  	return (
		  		<section className="login">
		  			<h1>Welcome to the Unacademic First Generation Environment</h1>
		  			<p>This environment offers an interface to enter your waypoint. We have named a traditional course a waypoint, because waypoints help you navigate on the sea. The traditional chapters or levels of a course trajectory we have called checkpoints. So get started on your waypoint for learners to start learning by dwelling. </p>
		  			<p>We need someway to detect that you are a human. </p>
		  			<p>We prefer github:</p>
		  			<div className="buttonContainer cf">
			  			<button className="authButton github" onClick={ this.props.authWithFirebase.bind(this, 'github') }>github</button>
		  			</div>
		  			<p>But you could also use the more common providers:</p>
		  			<div className="buttonContainer cf">
			  			<button className="authButton facebook" onClick={ this.props.authWithFirebase.bind(this, 'facebook') } >facebook</button>
			  			<button className="authButton twitter" onClick={ this.props.authWithFirebase.bind(this, 'twitter') } >twitter</button>
			  			<button className="authButton google" onClick={ this.props.authWithFirebase.bind(this, 'google') } >google</button>
		   			</div>
		   			<p>Please note that using another provider will generate a new account</p>
		   		</section>
		  	)
	  	} else {
	  		return (
		  		<section className="login">
		  			<p>You are logged in as: {this.props.state.name}</p>
		   		</section>
		  	)
	  	}
  	}
}

export default Login;
