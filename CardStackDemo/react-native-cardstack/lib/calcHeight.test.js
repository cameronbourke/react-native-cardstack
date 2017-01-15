'use strict';

var _calcHeight = require('./calcHeight');

var _calcHeight2 = _interopRequireDefault(_calcHeight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('calcHeight', function () {

	it('it calculates the height when no cards are selected', function () {
		var height = 400;
		var cardLength = 3;
		var indexs = {
			selectedIndex: null,
			hoveredIndex: null,
			cardIndex: 2
		};
		var actual = (0, _calcHeight2.default)(indexs, height, 30, cardLength);
		expect(height / cardLength).toEqual(actual);
	});

	it('it calculates the height when selectedIndex === cardIndex', function () {
		var height = 400;
		var indexs = {
			selectedIndex: 2,
			hoveredIndex: null,
			cardIndex: 2
		};
		var actual = (0, _calcHeight2.default)(indexs, height, 30, 3);
		expect(actual).toEqual(height);
	});

	it('it calculates the height when selectedIndex !== cardIndex', function () {
		var height = 400;
		var indexs = {
			selectedIndex: 1,
			hoveredIndex: null,
			cardIndex: 2
		};
		var actual = (0, _calcHeight2.default)(indexs, height, 30, 3);
		expect(actual).toEqual(0);
	});

	it('it calculates the height when hoveredIndex === cardIndex', function () {
		var height = 400;
		var hoverOffset = 30;
		var indexs = {
			selectedIndex: null,
			hoveredIndex: 2,
			cardIndex: 2
		};
		var actual = (0, _calcHeight2.default)(indexs, height, hoverOffset, 3);
		expect(actual).toEqual(height / 3 + hoverOffset);
	});
});