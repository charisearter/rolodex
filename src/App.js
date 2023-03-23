import { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			users: [],
		};
	}

	// add LifeCycle Methods
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((data) => this.setState({ users: data }))
			.then(() => console.log('State check: ', this.state));
	}

	render() {
		return (
			<div className='App'>
				{this.state.users.map((user) => {
					return <h1 key={user.id}>{user.name}</h1>;
				})}
			</div>
		);
	}
}

export default App;
