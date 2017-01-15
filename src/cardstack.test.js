import React from 'react';
import { View } from 'react-native';
import { shallow } from 'enzyme';

import CardStack from './CardStack';

describe('CardStack', () => {

	it('<CardStack /> throws if there is no children', (assert) => {
		expect(
			shallow.bind(shallow, <CardStack></CardStack>)
		).toThrow();
	});

	it('<CardStack /> throws if there is one child', (assert) => {
		expect(
			shallow.bind(shallow, <CardStack><View></View></CardStack>)
		).toThrow();
	});

})
