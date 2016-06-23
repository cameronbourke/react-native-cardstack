import React from 'react';
import { View, LayoutAnimation, StyleSheet } from 'react-native';

const ERROR_MESSAGE = 'CardStack component must have at least two child Card components. Please check the children of this CardStack instance.';

export default class CardStack extends React.Component {
	constructor (props) {
		super();
		const childrenLength = props.children && props.children.length || 1;
		const headerHeight = props.height / childrenLength;

		if (childrenLength <= 1) throw new Error(ERROR_MESSAGE);

		this._initialTopOffsets = props.children.map((child, i) => {
			return i === 0 ? 0 : headerHeight * i
		});

		this.state = {
			topOffsets: this._initialTopOffsets,
			cardSelected: false,
		};

		this.handleCardPress = this.handleCardPress.bind(this);
	}

	handleCardPress (id, cb) {
		const initialState = {
			topOffsets: [],
			cardSelected: true,
		};

		const nextState = (prev, offset, index) => {
			const {cardSelected} = this.state;
			const newOffset = (index === id) ? 0 : this.props.height;
			return {
				cardSelected: cardSelected ? false : true,
				topOffsets: [
					...prev.topOffsets,
					cardSelected ? this._initialTopOffsets[index] : newOffset,
				],
			};
		};

		LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
		this.setState(this.state.topOffsets.reduce(nextState, initialState));

		if (cb) cb(this.state.cardSelected, id);
	}

	renderCards () {
		const cloneCard = (child, i) => {
			return React.cloneElement(child, {
				key: i,
				cardId: i,
				hoverOffset: this.props.hoverOffset,
				cardSelected: this.state.cardSelected,
				height: this.props.height,
				topOffset: this.state.topOffsets[i],
				width: this.props.width,
				onPress: this.handleCardPress,
			});
		};
		return this.props.children.map(cloneCard);
	}

	render () {
		const stackStyles = {
			backgroundColor: this.props.background,
			height: this.props.height,
			width: this.props.width,
			borderWidth: 2,
			borderColor: 'orange',
		};
		return (
			<View style={[styles.container, stackStyles]}>
				{this.renderCards()}
			</View>
		);
	}
};

const styles = StyleSheet.create({
	container: {
		position: 'relative',
		overflow: 'hidden',
		padding: 0,
		margin: 0,
	},
});

CardStack.propTypes = {
	backgroundColor: React.PropTypes.string,
	height: React.PropTypes.number,
	hoverOffset: React.PropTypes.number,
	width: React.PropTypes.number,
};

CardStack.defaultProps = {
	width: 350,
	height: 600,
	bgColor: 'f8f8f8',
	hoverOffset: 30,
};
