import React from 'react';

import CheckPointsView from './check-points-view.jsx';
import WayPointsView from './way-points-view.jsx';
import LoginView from './login.jsx';

class Site extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			user : {
				name: 'Mr. Snotneus'
			}
		}
	}
	render(){
	  	return (
	  		<main className="site" style={{background: 'lightgrey', width: '400px', padding: '10px'}}>
	  			
	  			<p>hello {this.state.user.name}</p>

	  			<LoginView />
	  			<WayPointsView />
	  			<CheckPointsView />
	   		</main>
	  	)
  	}
}

React.render(<Site />, document.body);
