import React, { Component } from 'react';
import './card.styles.css';

export class Card extends Component {
	render() {
		const { id, name, email } = this.props.user;
		return (
			<div className='card-container' key={id}>
				<img
					src={`https://robohash.org/${id}?set=set5?size=180x180`}
					alt={`User Robot profile pic for ${name}`}
				/>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		);
	}
}

export default Card;
