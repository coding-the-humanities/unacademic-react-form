import React from 'react';

class Login extends React.Component {
	render(){
		if (typeof this.props.state == 'undefined'){ 
		  	return (
		  		<section className="loginView" style={{background: 'pink'}}>
		  			<p>Please login</p>
		  			<button onClick={ this.props.authWithFirebase.bind(this, 'github') }> github </button>
		   		</section>
		  	)
	  	} else {
	  		return (
		  		<section className="loginView" style={{background: 'pink'}}>
		  			<p>You are logged in as: {this.props.state.name}</p>
		   		</section>
		  	)
	  	}
  	}
}

export default Login;