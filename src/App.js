import { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			users: [],
			searchField: '',
			filteredUsers: [],
		};
	}

	// add LifeCycle Methods
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((data) => this.setState({ users: data }))
			.then(() => console.log('State check: ', this.state));
	}

	onSearchChange = (e) => {
		e.preventDefault();
		console.log(e);
		const searchField = e.target.value.toLowerCase();

		// shorthand for key and value have same name
		// searchField: searchField
		this.setState({ searchField });
	};
	render() {
		const { users, searchField } = this.state;
		const { onSearchChange } = this;

		const filteredUsers = users.filter((user) => {
			return user.name.toLowerCase().includes(searchField);
		});

		return (
			<div className='App'>
				<input
					type='text'
					className='search-box'
					placeholder='Search users'
					onChange={onSearchChange}
				/>
				{filteredUsers.map((user) => {
					return <h1 key={user.id}>{user.name}</h1>;
				})}
			</div>
		);
	}
}

export default App;
