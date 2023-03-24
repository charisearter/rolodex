import React, { Component } from 'react';
import Card from '../card/Card';
import './card-list.styles.css';

export class CardList extends Component {
	render() {
		const { users } = this.props;

		return (
			<div className='card-list'>
				{users.map((user) => {
					return <Card user={user} />;
				})}
			</div>
		);
	}
}

export default CardList;
