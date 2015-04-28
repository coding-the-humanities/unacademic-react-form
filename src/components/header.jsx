import React from 'react';

class Header extends React.Component {
	render(){
		return 	<header>
	  				<h1>Unacademic_</h1>
	  				{ ()=>{
						if (this.props.state){
	  						return 	<p onClick={this.props.setView.bind(this, 'profile')}>You are logged in as: {this.props.state.name}</p>
	  					}
	  				}() }
	  			</header>
	}
}

export default Header;
