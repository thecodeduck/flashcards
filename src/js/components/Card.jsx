import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.createOption = this.createOption.bind(this);
		this.createOptions = this.createOptions.bind(this);
		this.validateAnswer = this.validateAnswer.bind(this);
	}

	createOption = (option, i) => (
		<Button name={i} label={option} onClick={this.validateAnswer} />
	)

	createOptions = (options) => (
			options.map(this.createOption)
	)

	validateAnswer(selection) {
		const { onCorrect, onIncorrect, input } = this.props;
		const { answer } = input;

		if (selection === answer) {
			onCorrect();
		} else {
			onIncorrect();
		}
	}

	render() {
		const { input } = this.props;
		const {
			prompt,
			options,
		} = input;

		return (
			<div>
				<h3>{ prompt }</h3>
				{ options ? this.createOptions(options) : null }
			</div>
		);
	}
}

Card.propTypes = {
	input: PropTypes.shape({
		prompt: PropTypes.string,
		options: PropTypes.arrayOf(PropTypes.string),
		answer: PropTypes.num,
	}),
	onCorrect: PropTypes.func,
	onIncorrect: PropTypes.func,
};

Card.defaultProps = {
	input: {
		prompt: 'Default prompt',
		options: [
			'Correct Default',
			'Incorrect Default',
		],
		answer: 0,
	},
};

export default Card;
