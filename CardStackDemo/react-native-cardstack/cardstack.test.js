'use strict';

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _enzyme = require('enzyme');

var _CardStack = require('./CardStack');

var _CardStack2 = _interopRequireDefault(_CardStack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _ava2.default)('<CardStack /> throws if there is no children', function (assert) {
	assert.throws(_enzyme.shallow.bind(null, _react2.default.createElement(_CardStack2.default, null)));
});

(0, _ava2.default)('<CardStack /> throws if there is one child', function (assert) {
	assert.throws(_enzyme.shallow.bind(null, _react2.default.createElement(
		_CardStack2.default,
		null,
		_react2.default.createElement(_reactNative.View, null)
	)));
});