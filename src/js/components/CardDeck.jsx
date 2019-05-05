import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';
import Button from './Button';

class CardDeck extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			index: 0,
			correct: 0,
			incorrect: 0,
		};
		this.onCorrect = this.onCorrect.bind(this);
		this.onIncorrect = this.onIncorrect.bind(this);
		this.onReset = this.onReset.bind(this);
		this.getNextCard = this.getNextCard.bind(this);
		this.createReset = this.createReset.bind(this);
	}

	onCorrect() {
		const { index, correct } = this.state;
		const { deck } = this.props;
		if (index < deck.length) {
			this.setState({ index: index + 1, correct: correct + 1 });
		}
	}

	onIncorrect() {
		const { index, incorrect } = this.state;
		const { deck } = this.props;
		if (index < deck.length) {
			this.setState({ index: index + 1, incorrect: incorrect + 1 });
		}
	}

	onReset() {
		const { index } = this.state;
		const { deck } = this.props;
		if (index <= deck.length) {
			this.setState({ index: 0, correct: 0, incorrect: 0 });
		}
	}


	getNextCard() {
		const { index } = this.state;
		const { deck } = this.props;
		if (index < deck.length - 1) {
			this.setState({ index: index + 1 });
		}
		return index;
	}

	createCard = (input) => (
		<Card
			input={input}
			onCorrect={this.onCorrect}
			onIncorrect={this.onIncorrect}
			/>
	)

	createReset = () => (
		<Button label="Reset" onClick={this.onReset} className="Reset" />
	)
	createSkip = () => (
		<Button label={this.state.index === 0 ? 'Start' : 'Skip'} className={this.state.index === 0 ? 'Start' : 'Skip'} onClick={this.getNextCard} />
	)

	render() {
		const { index, correct, incorrect } = this.state;
		const { deck } = this.props;
		return (
			<div>
				<h2>Correct: {correct}</h2>
				<h2>Incorrect: {incorrect}</h2>
				{this.createCard(deck[index])}
				{ index === 0 ? null : this.createReset() }
				{ index === deck.length - 1 ? null : this.createSkip() }
			</div>
		);
	}
}

CardDeck.propTypes = {
	deck: PropTypes.arrayOf(Card.propTypes.input),
};

CardDeck.defaultProps = {
	deck: [
		{
			prompt: 'Intro',
		},
		{
			prompt: 'prompt 1 Default',
			options: [
				'Correct 1',
				'Incorrect 1 ',
			],
			answer: 0,
		},
		{
			prompt: 'prompt 2 Default',
			options: [
				'Correct 2',
				'Incorrect 2',
			],
			answer: 0,
		},
		{
			prompt: 'prompt 3 Default',
			options: [
				'Correct 3',
				'Incorrect 3',
			],
			answer: 0,
		},
		{
			prompt: 'End',
		},
	],
};

export default CardDeck;
