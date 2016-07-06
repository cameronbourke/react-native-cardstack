import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

export default class Card extends React.Component {
	constructor (props) {
		super();
		this.handlePressIn = this.handlePressIn.bind(this);
		this.handlePressOut = this.handlePressOut.bind(this);
	}

	handlePressIn () {
		this.props.onPressIn(this.props.cardId);
	}

	handlePressOut () {
		this.props.onPressOut(this.props.cardId);
	}

	render () {
		const cardStyles = {
			backgroundColor: this.props.background,
			height: this.props.height,
		};
		return (
			<TouchableOpacity
				activeOpacity={1}
				style={[styles.container, cardStyles]}
				onPressIn={this.handlePressIn}
				onPressOut={this.handlePressOut}>
				{this.props.children}
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
	}
});
