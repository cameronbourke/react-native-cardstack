import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
	Image,
	TouchableOpacity,
	Dimensions,
  View,
} from 'react-native';

import { CardStack, Card } from './react-native-cp-update-button';
import people from './people';

const { height, width } = Dimensions.get('window');

const ProfilePicture = ({ imgSrc, borderColor }) => (
	<Image
		style={[styles.img, { borderWidth: 3, borderColor: borderColor }]}
		source={{ uri: imgSrc }}
	/>
);

const DetailsRow = ({ icon, title, summary }) => {
	return (
		<View style={styles.detailsRow}>
			{/*<span
			className={`icon ${icon}`}
			style={{ ...styles.detailsRow.icon, alignSelf: 'flex-start' }}
			/>*/}
			<View>
				<Text style={styles.detailsTitle}>
					{title}
				</Text>
				<Text style={{ fontWeight: '300', lineHeight: 1.45 }}>
					{summary}
				</Text>
			</View>
		</View>
	);
};

// className='card-header-details'
// className='icon ion-ios-arrow-down'
const TeamMemberCard = (props) => (
	<View style={{ position: 'absolute', top: 0 }}>
		<View style={styles.cardHeader}>
			<ProfilePicture imgSrc={props.imgSrc} borderColor={props.imgBorderColor} />
			<View>
				<Text style={styles.headerName}>{props.name}</Text>
				<Text style={styles.headerTitle}>{props.title}</Text>
			</View>
		</View>

		<View>
			<DetailsRow
				icon='ion-ios-telephone-outline'
				title={props.mobileNo}
			/>

			<DetailsRow
				icon='ion-ios-location-outline'
				title={props.location}
			/>

			<DetailsRow
				icon='icon ion-ios-paper-outline'
				title='Main Role'
				summary={props.role}
			/>
		</View>
  </View>
);

const CardStackDemo = (props) => (
	<View style={styles.container}>
		<CardStack
			height={height}
			width={width}
			background="#f8f8f8"
			hoverOffset={25}>

			{people.map((person, i) =>
				<Card
					key={i}
					background={person.background}>
					<TeamMemberCard {...person} />
				</Card>
			)}

		</CardStack>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		borderWidth: 2,
		borderColor: 'red',
	},
	cardHeader: {
		height: 125,
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 20,
		paddingRight: 20,
	},
	headerName: {
		margin: 0,
		fontWeight: '500',
		fontSize: 25,
		textAlign: 'right'
	},
	headerTitle: {
		marginTop: 4,
		fontWeight: '300',
		fontSize: 17,
		opacity: 0.8,
		textAlign: 'right',
	},
	img: {
		width: 60,
		height: 60,
		borderRadius: 60,
	},
	detailsRow: {
		flex: 1,
		paddingLeft: 20,
		paddingRight: 20,
		alignItems: 'center',
		marginTop: 25,
		marginBottom: 25,
	},
	detailsIcon: {
		flex: 1,
		width: 25,
		height: 30,
		marginRight: 20,
		borderBottomWidth: 1,
		borderColor: 'rgba(255, 255, 255, 0.8)',
		textAlign: 'center',
		fontSize: 22,
	},
	detailsTitle: {
		fontWeight: '500',
		fontSize: 20,
		margin: 0,
		fontStyle: 'italic',
	},
});

AppRegistry.registerComponent('CardStackDemo', () => CardStackDemo);
