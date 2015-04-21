import React from 'react';

class Login extends React.Component {
	render(){
		if (typeof this.props.state == 'undefined'){ 
		  	return (
		  		<section className="login">
		  			<h1>Welcome to Unacademic</h1>
		  			<p>Our site offers the prettiest interface to manipulate the teaching experience of your students.
		  			Please kill me now. Also please login.</p>
		  			<button className="github" onClick={ this.props.authWithFirebase.bind(this, 'github') } />
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