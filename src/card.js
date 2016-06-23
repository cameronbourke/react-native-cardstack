import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

export default class Card extends React.Component {
	constructor (props) {
		super(props);
		this.handlePress = this.handlePress.bind(this);
	}

	handlePress () {
		this.props.onPress(this.props.cardId, this.props.cardClicked);
	}

	render () {
		const {cardId, cardSelected, topOffset, width} = this.props;
		const transform = [{ translateY: topOffset }];
		const cardStyles = {
			backgroundColor: this.props.background,
			transform,
			width,
			height: this.props.height,
		};
		return (
			<TouchableOpacity
				style={[styles.container, cardStyles]}
				onPress={this.handlePress}>
				{this.props.children}
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		borderWidth: 2,
		borderColor: 'green',
		position: 'absolute',
		top: 0,
	}
});
