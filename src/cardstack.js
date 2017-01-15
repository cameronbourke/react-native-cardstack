import React from 'react';
import { View, LayoutAnimation, StyleSheet } from 'react-native';
import calcHeight from './lib/calcHeight';

const { Types, Properties } = LayoutAnimation;

const ERROR_MESSAGE = 'CardStack component must have at least two child Card components. Please check the children of this CardStack instance.';
const LONG_PRESS_THROTTLE = 400;

export default class CardStack extends React.Component {
	constructor (props) {
		super();
		const childrenLength = props.children && props.children.length || 1;
		if (childrenLength <= 1) throw new Error(ERROR_MESSAGE);

		this.handlePressIn = this.handlePressIn.bind(this);
		this.handlePressOut = this.handlePressOut.bind(this);

		this.state = {
			selectedCardIndex: null,
			hoveredCardIndex: null,
		};

		this._PRESET = LayoutAnimation.create(
		  props.transitionDuration, Types.easeInEaseOut, Properties.opacity
		);
	}

	componentWillReceiveProps ({ transitionDuration }) {
		if (this.props.transitionDuration !== transitionDuration) {
			this._PRESET = LayoutAnimation.create(
				transitionDuration, Types.easeInEaseOut, Properties.opacity
			);
		}
	}

	handleCardPress (cardId) {
		LayoutAnimation.configureNext(this._PRESET);
		const index = (this.state.selectedCardIndex === cardId) ? null : cardId;
		this.setState({ selectedCardIndex: index });
		if (this.props.onPress) this.props.onPress();
	}

	handleCardLongPress (cardId) {
		LayoutAnimation.configureNext(this._PRESET);
		this.setState({ hoveredCardIndex: null });
		if (this.props.onLongPress) this.props.onLongPress();
	}

	handlePressIn (cardId, cardSelected) {
		if (this.state.selectedCardIndex) return this.handleCardPress(cardId);
		LayoutAnimation.configureNext(this._PRESET);
		this.setState({ hoveredCardIndex: cardId });
		this._cardPressed = setTimeout(() =>
			this._cardPressed = clearTimeout(this._cardPressed),
			LONG_PRESS_THROTTLE
		);
	}

	handlePressOut (cardId) {
		if (this._cardPressed) this.handleCardPress(cardId);
		else this.handleCardLongPress(cardId);
	}

	renderCards () {
		const cloneCard = (child, cardIndex, children) => {
			const indexs = {
				selectedIndex: this.state.selectedCardIndex,
				hoveredIndex: this.state.hoveredCardIndex,
				cardIndex,
			};
			const height = calcHeight(
				indexs,
				this.props.height,
				this.props.hoverOffset,
				children.length
			);
			return React.cloneElement(child, {
				key: cardIndex,
				cardId: cardIndex,
				height,
				onPressIn: this.handlePressIn,
				onPressOut: this.handlePressOut,
			});
		};
		return this.props.children.map(cloneCard);
	}

	render () {
		const stackStyles = {
			overflow: 'hidden',
			backgroundColor: this.props.backgroundColor,
			height: this.props.height,
			width: this.props.width,
		};
		return (
			<View
				style={[this.props.style, stackStyles]}>
				{this.renderCards()}
			</View>
		);
	}
};

CardStack.propTypes = {
	height: React.PropTypes.number,
	width: React.PropTypes.number,
	backgroundColor: React.PropTypes.string,
	hoverOffset: React.PropTypes.number,
	transitionDuration: React.PropTypes.number,
};

CardStack.defaultProps = {
	height: 600,
	width: 350,
	backgroundColor: 'f8f8f8',
	hoverOffset: 30,
	transitionDuration: 300,
};
