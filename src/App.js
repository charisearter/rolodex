import { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			users: [
				{
					id: 1,
					name: 'A',
				},
				{
					id: 2,
					name: 'B',
				},
				{
					id: 3,
					name: 'C',
				},
			],
		};
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
