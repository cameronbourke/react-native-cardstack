import test from 'ava';
import React from 'react';
import { View } from 'react-native';
import { shallow } from 'enzyme';

import CardStack from './CardStack';

test('<CardStack /> throws if there is no children', (assert) => {
	assert.throws(shallow.bind(null, <CardStack></CardStack>));
});

test('<CardStack /> throws if there is one child', (assert) => {
	assert.throws(
		shallow.bind(null, <CardStack><View></View></CardStack>)
	);
});
