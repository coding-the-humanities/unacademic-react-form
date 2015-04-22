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
		  			</p><p>We really like github for that:
		  			</p>
		  			<div>
			  			<button className="authButton github" onClick={ this.props.authWithFirebase.bind(this, 'github') } />
		  			</div>
		  			<p>But you could also use the more common providers:</p>
		  			<div>
			  			<button className="authButton facebook" onClick={ this.props.authWithFirebase.bind(this, 'github') } />
			  			<button className="authButton twitter" onClick={ this.props.authWithFirebase.bind(this, 'github') } />
			  			<button className="authButton google" onClick={ this.props.authWithFirebase.bind(this, 'github') } />
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