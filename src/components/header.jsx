import React from 'react';

class Header extends React.Component {
	render(){
		return 	<header> 
	  				<h1>Unacademic_ Hello</h1>
	  				{ ()=>{
						if (this.props.state){
	  						return <p>You are logged in as: <input className="loginInput" onChange={this.props.updateUser.bind(this)} value={this.props.state.name} /></p>
	  					}
	  				}() }
	  			</header>
	}
}

export default Header;
