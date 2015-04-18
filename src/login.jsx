import React from 'react';

class LoginView extends React.Component {
	render(){
		var userData = this.props.state;
	  	return (
	  		<section className="loginView" style={{background: 'pink'}}>
	  			<p>Youre logged in as: {userData.name}</p>
	   		</section>
	  	)
  	}
}

export default LoginView;