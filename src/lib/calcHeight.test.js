import calcHeight from './calcHeight';

describe('calcHeight', () => {

	it('it calculates the height when no cards are selected', () => {
		const height = 400;
		const cardLength = 3;
		const indexs = {
			selectedIndex: null,
			hoveredIndex: null,
			cardIndex: 2,
		};
		const actual = calcHeight(indexs, height, 30, cardLength);
	  expect(height / cardLength).toEqual(actual);
	});

	it('it calculates the height when selectedIndex === cardIndex', () => {
		const height = 400;
		const indexs = {
			selectedIndex: 2,
			hoveredIndex: null,
			cardIndex: 2,
		};
		const actual = calcHeight(indexs, height, 30, 3);
	  expect(actual).toEqual(height);
	});

	it('it calculates the height when selectedIndex !== cardIndex', () => {
		const height = 400;
		const indexs = {
			selectedIndex: 1,
			hoveredIndex: null,
			cardIndex: 2,
		};
		const actual = calcHeight(indexs, height, 30, 3);
	  expect(actual).toEqual(0);
	});

	it('it calculates the height when hoveredIndex === cardIndex', () => {
		const height = 400;
		const hoverOffset = 30;
		const indexs = {
			selectedIndex: null,
			hoveredIndex: 2,
			cardIndex: 2,
		};
		const actual = calcHeight(indexs, height, hoverOffset, 3);
	  expect(actual).toEqual((height / 3) + hoverOffset);
	});

});
