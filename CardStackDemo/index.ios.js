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
import Ionicon from 'react-native-vector-icons/Ionicons';

import { CardStack, Card } from './react-native-cardstack';
import people from './people';

// Can use the Dimensions API to query for the width and height
const { width } = Dimensions.get('window');

const ProfilePicture = ({ imgSrc, borderColor }) => (
	<Image
		style={[styles.img, { borderColor: borderColor }]}
		source={{ uri: imgSrc }}
	/>
);

const DetailsRow = ({ icon, title, summary }) => {
	return (
		<View style={styles.detailsRow}>
			<View style={styles.detailsIcon}>
				<Ionicon
					name={icon}
					size={27}
					color='#fff'
				/>
   		</View>
			<View>
				<Text style={styles.detailsTitle}>
					{title}
				</Text>
				<Text style={styles.detailsSummary}>
					{summary}
				</Text>
			</View>
		</View>
	);
};

const TeamMemberCard = (props) => (
	<View>
		<View style={styles.cardHeader}>
			<View>
				<ProfilePicture
					imgSrc={props.imgSrc}
					borderColor={props.imgBorderColor}
				/>
			</View>
			<View style={{ alignItems: 'flex-end' }}>
				<Text style={styles.headerName}>{props.name}</Text>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Ionicon
						name='ios-arrow-down-outline'
						style={{ marginRight: 10, paddingTop: 5 }}
						size={20}
						color='rgba(255, 255, 255, 0.7)'
					/>
					<Text style={styles.headerTitle}>{props.title}</Text>
    		</View>
			</View>
		</View>

		<View>
			<DetailsRow
				icon='ios-call-outline'
				title={props.mobileNo}
			/>

			<DetailsRow
				icon='ios-pin-outline'
				title={props.location}
			/>

			<DetailsRow
				icon='ios-paper-outline'
				title='Main Role'
				summary={props.role}
			/>
		</View>
  </View>
);

const CardStackDemo = (props) => (
	<View style={styles.container}>
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  		<Text style={styles.exampleTitle}>{'<CardStack /> Example'}</Text>
		</View>
		<CardStack
			height={400}
			width={width}
			transitionDuration={300}
			backgroundColor='#f8f8f8'
			hoverOffset={60}>

			{people.map((person, i) =>
				<Card
					key={i}
					onPress={() => console.log('onPress called')}
					onLongPress={() => console.log('long press called')}
					backgroundColor={person.background}>
					<TeamMemberCard {...person} />
				</Card>
			)}

		</CardStack>
	</View>
);

const styles = StyleSheet.create({
	container: {
		paddingTop: 40,
		flex: 1,
		justifyContent: 'space-between',
	},
	exampleTitle: {
		fontSize: 28,
		fontFamily: 'Futura-Medium'
	},
	cardHeader: {
		flexDirection: 'row',
		height: 100,
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
		fontSize: 23,
		color: '#fff',
		textAlign: 'right'
	},
	headerTitle: {
		marginTop: 4,
		fontWeight: '300',
		fontSize: 16,
		color: '#fff',
		opacity: 0.8,
	},
	img: {
		width: 60,
		height: 60,
		borderRadius: 60	/2,
		borderWidth: 3,
	},
	detailsRow: {
		flexDirection: 'row',
		paddingLeft: 20,
		paddingRight: 20,
		marginBottom: 20,
	},
	detailsIcon: {
		alignItems: 'center',
		width: 25,
		height: 35,
		marginRight: 20,
		alignSelf: 'flex-start',
		borderBottomWidth: 1,
		borderColor: 'rgba(255, 255, 255, 0.8)',
	},
	detailsTitle: {
		fontWeight: '500',
		fontSize: 19,
		color: '#fff',
		margin: 0,
		fontStyle: 'italic',
	},
	detailsSummary: {
		fontWeight: '300',
		color: '#fff',
		lineHeight: 22,
		width: 300,
	},
});

AppRegistry.registerComponent('CardStackDemo', () => CardStackDemo);
