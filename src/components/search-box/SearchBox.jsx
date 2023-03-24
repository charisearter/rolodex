import React, { Component } from 'react';

export class SearchBox extends Component {
	render() {
		const { onChangeHandler, placeholder, className } = this.props;
		return (
			<div>
				<input
					type='text'
					className= { className }
					placeholder={ placeholder }
					onChange={onChangeHandler}
				/>
			</div>
		);
	}
}

export default SearchBox;
