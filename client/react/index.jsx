import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import WorksContainer from './containers/WorksContainer';
import ProjectContainer from './containers/ProjectContainer';
import AboutContainer from './containers/AboutContainer';
import ContactContainer from './containers/ContactContainer';
import Navbar from './components/Navbar';

class Routes extends React.Component {
	constructor(){
		super()
		this.state = { };
	}

	render(){
		return(
			<BrowserRouter>
				<div>
  				<Navbar/>
  				<Route exact path = '/' component={HomeContainer} />
  				<Route path = '/works' component ={WorksContainer} />
  				<Route path = '/projects:id' component ={ProjectContainer} />
  				<Route path = '/about' component ={AboutContainer} />
  				<Route path = '/contact' component ={ContactContainer} />
				</div>
			</BrowserRouter>
		)
	}
}

render(<Routes/>, document.querySelector("#app"));