'use strict';

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _calcHeight = require('./calcHeight');

var _calcHeight2 = _interopRequireDefault(_calcHeight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _ava2.default)('it calculates the height when no cards are selected', function (assert) {
	var height = 400;
	var cardLength = 3;
	var indexs = {
		selectedIndex: null,
		hoveredIndex: null,
		cardIndex: 2
	};
	var actual = (0, _calcHeight2.default)(indexs, height, 30, cardLength);
	assert.is(actual, height / cardLength);
});

(0, _ava2.default)('it calculates the height when selectedIndex === cardIndex', function (assert) {
	var height = 400;
	var indexs = {
		selectedIndex: 2,
		hoveredIndex: null,
		cardIndex: 2
	};
	var actual = (0, _calcHeight2.default)(indexs, height, 30, 3);
	assert.is(actual, height);
});

(0, _ava2.default)('it calculates the height when selectedIndex !== cardIndex', function (assert) {
	var height = 400;
	var indexs = {
		selectedIndex: 1,
		hoveredIndex: null,
		cardIndex: 2
	};
	var actual = (0, _calcHeight2.default)(indexs, height, 30, 3);
	assert.is(actual, 0);
});

(0, _ava2.default)('it calculates the height when hoveredIndex === cardIndex', function (assert) {
	var height = 400;
	var hoverOffset = 30;
	var indexs = {
		selectedIndex: null,
		hoveredIndex: 2,
		cardIndex: 2
	};
	var actual = (0, _calcHeight2.default)(indexs, height, hoverOffset, 3);
	assert.is(actual, height / 3 + hoverOffset);
});