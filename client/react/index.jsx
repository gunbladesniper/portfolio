import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import HomeContainer from './containers/HomeContainer';
import WorksContainer from './containers/WorksContainer';
import ProjectContainer from './containers/ProjectContainer';
import AboutContainer from './containers/AboutContainer';
import ContactContainer from './containers/ContactContainer';

class Routes extends React.Component {
	constructor(){
		super()
		this.state = { };
	}

	render(){
		return(
			<Router history={browserHistory}>
				<Route path = '/' component={HomeContainer}>
					<Route path = '/work' component ={WorksContainer} />
					<Route path = '/work/:id' component ={ProjectContainer} />
					<Route path = '/about' component ={AboutContainer} />
					<Route path = '/contact' component ={ContactContainer} />
					<Route></Route>
				</Route>
			</Router>
		)
	}
}

render(<Routes/>, document.querySelector("#app"));