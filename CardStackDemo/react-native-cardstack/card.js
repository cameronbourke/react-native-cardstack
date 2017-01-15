'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = function (_React$Component) {
	_inherits(Card, _React$Component);

	function Card(props) {
		_classCallCheck(this, Card);

		var _this = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this));

		_this.handlePressIn = _this.handlePressIn.bind(_this);
		_this.handlePressOut = _this.handlePressOut.bind(_this);
		return _this;
	}

	_createClass(Card, [{
		key: 'handlePressIn',
		value: function handlePressIn() {
			this.props.onPressIn(this.props.cardId);
		}
	}, {
		key: 'handlePressOut',
		value: function handlePressOut() {
			this.props.onPressOut(this.props.cardId);
		}
	}, {
		key: 'render',
		value: function render() {
			var cardStyles = {
				backgroundColor: this.props.backgroundColor,
				height: this.props.height
			};
			return _react2.default.createElement(
				_reactNative.TouchableOpacity,
				_extends({}, this.props, {
					activeOpacity: 1,
					style: [styles.container, this.props.style, cardStyles],
					onPressIn: this.handlePressIn,
					onPressOut: this.handlePressOut }),
				this.props.children
			);
		}
	}]);

	return Card;
}(_react2.default.Component);

exports.default = Card;


var styles = _reactNative.StyleSheet.create({
	container: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0
	}
});