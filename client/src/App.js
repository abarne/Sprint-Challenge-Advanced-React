import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import DarkModeButton from './components/DarkModeButton';

class App extends Component {
	constructor() {
		super();
		this.state = {
			people: [],
			test: 'hi'
		};
	}

	componentDidMount() {
		axios.get(`http://localhost:5000/api/players`).then((response) => {
			this.setState({ people: response.data });
			console.log(this.state.people);
		});
	}

	render() {
		return (
			<div className="App">
				<DarkModeButton />
				{this.state.people.map((item) => (
					<div className="person">
						<h1>Name: {item.name}</h1>
						<h2>Country: {item.country}</h2>
						<h2>Searches: {item.searches}</h2>
					</div>
				))}
			</div>
		);
	}
}

export default App;
