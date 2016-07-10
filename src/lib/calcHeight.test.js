import test from 'ava';
import calcHeight from './calcHeight';

test('it calculates the height when no cards are selected', (assert) => {
	const height = 400;
	const cardLength = 3;
	const indexs = {
		selectedIndex: null,
		hoveredIndex: null,
		cardIndex: 2,
	};
	const actual = calcHeight(indexs, height, 30, cardLength);
  assert.is(actual, height / cardLength);
});

test('it calculates the height when selectedIndex === cardIndex', (assert) => {
	const height = 400;
	const indexs = {
		selectedIndex: 2,
		hoveredIndex: null,
		cardIndex: 2,
	};
	const actual = calcHeight(indexs, height, 30, 3);
  assert.is(actual, height);
});

test('it calculates the height when selectedIndex !== cardIndex', (assert) => {
	const height = 400;
	const indexs = {
		selectedIndex: 1,
		hoveredIndex: null,
		cardIndex: 2,
	};
	const actual = calcHeight(indexs, height, 30, 3);
  assert.is(actual, 0);
});

test('it calculates the height when hoveredIndex === cardIndex', (assert) => {
	const height = 400;
	const hoverOffset = 30;
	const indexs = {
		selectedIndex: null,
		hoveredIndex: 2,
		cardIndex: 2,
	};
	const actual = calcHeight(indexs, height, hoverOffset, 3);
  assert.is(actual, (height / 3) + hoverOffset);
});
