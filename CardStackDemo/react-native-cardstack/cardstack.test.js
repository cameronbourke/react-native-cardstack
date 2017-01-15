'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _enzyme = require('enzyme');

var _CardStack = require('./CardStack');

var _CardStack2 = _interopRequireDefault(_CardStack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('CardStack', function () {

	it('<CardStack /> throws if there is no children', function (assert) {
		expect(_enzyme.shallow.bind(_enzyme.shallow, _react2.default.createElement(_CardStack2.default, null))).toThrow();
	});

	it('<CardStack /> throws if there is one child', function (assert) {
		expect(_enzyme.shallow.bind(_enzyme.shallow, _react2.default.createElement(
			_CardStack2.default,
			null,
			_react2.default.createElement(_reactNative.View, null)
		))).toThrow();
	});
});