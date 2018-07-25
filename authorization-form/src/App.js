import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			password: 'swordfish',
			authorized: false
		};
		this.authorize = this.authorize.bind(this);
	}
	
	authorize(e) {
		const password = e.target.querySelector(
			'input[type="password"]').value;
		const auth = password == this.state.password;
		this.setState({
			authorized: auth
		});
	}
	
	render() {
		let authorizationHeading = this.state.authorized ? 'Contact' : 'Enter the Password';
		
		let login = (
			<form action="#" onSubmit={this.authorize}>
				<input type="password" placeholder="password" />
				<input type="submit" />
			</form>
		);
		
		const contactInfo = (
			<ul>
				<li>
					client@example.com
				</li>
				<li>
					555.555.5555
				</li>
			</ul>
		);
		
		return (
			<div id="authorization">
				<h1>{authorizationHeading}</h1>
				{this.state.authorized ? contactInfo : login}
			</div>
		);
	}		
}

const App = Contact;

export default App;
