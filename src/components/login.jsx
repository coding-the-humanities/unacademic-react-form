import React from 'react';

class Login extends React.Component {
	render(){
		if (typeof this.props.state == 'undefined'){ 
		  	return (
		  		<section className="login">
		  			<h1>Welcome to Unacademic</h1>
		  			<p>Our site offers the prettiest interface to manipulate the
		  			teaching experience of your students. We do need you to
		  			login though. 
		  			</p>
		  			<p>We really like github for that:
		  			</p>
		  			<div className="buttonContainer cf">
			  			<button className="authButton github" onClick={ this.props.authWithFirebase.bind(this, 'github') }>github</button>
		  			</div>
		  			<p>But you could also use the more common providers:</p>
		  			<div className="buttonContainer cf">
			  			<button className="authButton facebook" onClick={ this.props.authWithFirebase.bind(this, 'facebook') } >facebook</button>
			  			<button className="authButton twitter" onClick={ this.props.authWithFirebase.bind(this, 'twitter') } >twitter</button>
			  			<button className="authButton google" onClick={ this.props.authWithFirebase.bind(this, 'googleplus') } >google+</button>
		   			</div>
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