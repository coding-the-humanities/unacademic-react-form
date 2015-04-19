import React from 'react';

class Login extends React.Component {
	render(){
		if (!this.props.state){ 
		  	return (
		  		<section className="loginView" style={{background: 'pink'}}>
		  			<p>Please login</p>
		   		</section>
		  	)
	  	} else {
	  		return (
		  		<section className="loginView" style={{background: 'pink'}}>
		  			<p>You are logged in as: {this.props.userData.name}</p>
		   		</section>
		  	)
	  	}
  	}
}

export default Login;