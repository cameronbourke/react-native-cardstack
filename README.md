React Native CardStack
=========================

Implementation of [react-cardstack](cameronbourke.github.io/react-cardstack) for React Native, this component allows you to achieve a UI similar to the iOS passbook app.

<img src="./demo.gif" width="320" />

> Currently only iOS is supported, however Android support will land shortly!

* [Installation](#installation)
* [Usage](#usage)
* [Components](#components)
	* [`<CardStack />`](#cardstack-)
	* [`<Card />`](#card-)
* [Example & Demo](#example--demo)

## Installation

`react-native-cardstack` requires on the following peer dependencies:
- [React Native](https://facebook.github.io/react-native/) 0.27 or later
- [React](https://facebook.github.io/react/) 15.0 or later

```
npm install --save react-native-cardstack
```

## Usage

*react-native-cardstack* exports two React components. These are `CardStack` and `Card`. The `CardStack` component is responsible for holding the state of it's child `Card` components. However, this is abstracted away which makes using the component a whole deal simpler. **Note: there must be at least two instances of Card as children of CardStack, otherwise the component will throw an error**.

An example use of React Card Stack looks like:

```js
import { CardStack, Card } from 'react-cardstack';

<CardStack
	height={500}
	width={400}
	backgroundColor='#f8f8f8'
	hoverOffset={25}>

	<Card backgroundColor='#2980B9'>
		<NumberOne />
	</Card>

	<Card backgroundColor='#27AE60'>
		<NumberTwo />
	</Card>

</CardStack>
```

The `Card` component wraps around the content you want to render for each card. You can render both elements or components inside `Card`.

#### Figuring out the Header Height

When all `Card` components are collapsed, the top of each card will be visible. This is basically the "header" of the `Card` component. To calculate what size the header will be simply divide the height passed to `CardStack` by the number of child `Card` components. In the example above, the header height for each card will be `500 / 2`, which equals `250`.

## Components
Both components have a selection of props that can be used to configure and interact with each component.

#### `<CardStack />`
Property           | Type   | Default | Description
------------------ | ------ | ------ | --------
width       		   | number | 350px  | the width of the component
height      		   | number | 500px  | the height of the component
backgroundColor 	 | string | f8f8f8 | can be a hex or rgba value
transitionDuration | number | 300    | can be a hex or rgba value
hoverOffset        | number | 30px   | how far the card will shift up when being hovered
<br>

#### `<Card />`
Property    | Type | Default | Description
----------- | ------------- | ------- | -------
background  | string | undefined | can be a hex or rgba value
...all props for the [TouchableOpacity](https://facebook.github.io/react-native/docs/touchablewithoutfeedback.html#props) component

## Example & Demo
```
git clone https://github.com/cameronbourke/react-native-cardstack
cd react-native-cardstack
npm install
cd CardStackDemo
npm install
```

Then open the Xcode project at `ios/CardStackDemo.xcodeproj`

Currently `npm link` does not work with React Native's packager, so, to temporarily get around that, `npm start` actually runs a babel command that will output the `/src` directory into `/CardStackDemo/react-native-cardstack` which explains why you will see the following when in the example app:

```js
import { CardStack, Card } from './react-native-cardstack';
```

## What's Next?
- [ ] Add `onPress` and `onLongPress` props to `<Card />`, which will pass the state of the card to the callback
- [ ] Add more unit tests using [ava](https://github.com/avajs/ava)
- [ ] Unifiy the API for both this package, and the original `react-cardstack`
- [ ] Add android support

## License

MIT Licensed Copyright (c) Cameron Bourke 2016
