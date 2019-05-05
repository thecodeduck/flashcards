import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { props } = this;
		const {
			label,
			type,
			name,
			className,
			onClick,
		} = props;

		const clickWrapper = (evt) => onClick(name);

		return (
			<button type={type} onClick={clickWrapper} name={name} className={className}>
				{ label }
			</button>
		);
	}
}

Button.propTypes = {
	label: PropTypes.string,
	name: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	type: PropTypes.string,
	onClick: PropTypes.func,
};

Button.defaultProps = {
	label: 'Default Button',
	name: 'default_name',
	type: 'button',
	onClick: (...args) => {
		console.log('button.defaultProps.onClick ', args);
	},
};

export default Button;
