import React from 'react';

class Header extends React.Component {
	render(){
		return 	<header>
	  				<h1>Unacademic_ Hello</h1>
	  				{ ()=>{
						if (this.props.state){
	  						return 	<div>
	  									<p>You are logged in as: <input className="loginInput" onChange={this.props.updateUser.bind(this, 'name')} value={this.props.state.name} /></p>
	  									<p>from: <input className="loginInput" onChange={this.props.updateUser.bind(this, 'institution')} value={this.props.state.institution} /></p>
  									</div>
	  					}
	  				}() }
	  			</header>
	}
}

export default Header;
