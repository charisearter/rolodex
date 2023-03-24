import { Component } from 'react';
import './App.css';

// Components
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';
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
				<h1 className='app-title'>Rolodex</h1>
				<SearchBox
					onChangeHandler={onSearchChange}
					className='search-box'
					placeholder='Search Users'
				/>
				<CardList users={filteredUsers} />
			</div>
		);
	}
}

export default App;
