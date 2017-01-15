'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _calcHeight = require('./lib/calcHeight');

var _calcHeight2 = _interopRequireDefault(_calcHeight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Types = _reactNative.LayoutAnimation.Types,
    Properties = _reactNative.LayoutAnimation.Properties;


var ERROR_MESSAGE = 'CardStack component must have at least two child Card components. Please check the children of this CardStack instance.';
var LONG_PRESS_THROTTLE = 400;

var CardStack = function (_React$Component) {
	_inherits(CardStack, _React$Component);

	function CardStack(props) {
		_classCallCheck(this, CardStack);

		var _this = _possibleConstructorReturn(this, (CardStack.__proto__ || Object.getPrototypeOf(CardStack)).call(this));

		var childrenLength = props.children && props.children.length || 1;
		if (childrenLength <= 1) throw new Error(ERROR_MESSAGE);

		_this.handlePressIn = _this.handlePressIn.bind(_this);
		_this.handlePressOut = _this.handlePressOut.bind(_this);

		_this.state = {
			selectedCardIndex: null,
			hoveredCardIndex: null
		};

		_this._PRESET = _reactNative.LayoutAnimation.create(props.transitionDuration, Types.easeInEaseOut, Properties.opacity);
		return _this;
	}

	_createClass(CardStack, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(_ref) {
			var transitionDuration = _ref.transitionDuration;

			if (this.props.transitionDuration !== transitionDuration) {
				this._PRESET = _reactNative.LayoutAnimation.create(transitionDuration, Types.easeInEaseOut, Properties.opacity);
			}
		}
	}, {
		key: 'handleCardPress',
		value: function handleCardPress(cardId) {
			_reactNative.LayoutAnimation.configureNext(this._PRESET);
			var index = this.state.selectedCardIndex === cardId ? null : cardId;
			this.setState({ selectedCardIndex: index });
			if (this.props.onPress) this.props.onPress();
		}
	}, {
		key: 'handleCardLongPress',
		value: function handleCardLongPress(cardId) {
			_reactNative.LayoutAnimation.configureNext(this._PRESET);
			this.setState({ hoveredCardIndex: null });
			if (this.props.onLongPress) this.props.onLongPress();
		}
	}, {
		key: 'handlePressIn',
		value: function handlePressIn(cardId, cardSelected) {
			var _this2 = this;

			if (this.state.selectedCardIndex) return this.handleCardPress(cardId);
			_reactNative.LayoutAnimation.configureNext(this._PRESET);
			this.setState({ hoveredCardIndex: cardId });
			this._cardPressed = setTimeout(function () {
				return _this2._cardPressed = clearTimeout(_this2._cardPressed);
			}, LONG_PRESS_THROTTLE);
		}
	}, {
		key: 'handlePressOut',
		value: function handlePressOut(cardId) {
			if (this._cardPressed) this.handleCardPress(cardId);else this.handleCardLongPress(cardId);
		}
	}, {
		key: 'renderCards',
		value: function renderCards() {
			var _this3 = this;

			var cloneCard = function cloneCard(child, cardIndex, children) {
				var indexs = {
					selectedIndex: _this3.state.selectedCardIndex,
					hoveredIndex: _this3.state.hoveredCardIndex,
					cardIndex: cardIndex
				};
				var height = (0, _calcHeight2.default)(indexs, _this3.props.height, _this3.props.hoverOffset, children.length);
				return _react2.default.cloneElement(child, {
					key: cardIndex,
					cardId: cardIndex,
					height: height,
					onPressIn: _this3.handlePressIn,
					onPressOut: _this3.handlePressOut
				});
			};
			return this.props.children.map(cloneCard);
		}
	}, {
		key: 'render',
		value: function render() {
			var stackStyles = {
				overflow: 'hidden',
				backgroundColor: this.props.backgroundColor,
				height: this.props.height,
				width: this.props.width
			};
			return _react2.default.createElement(
				_reactNative.View,
				{
					style: [this.props.style, stackStyles] },
				this.renderCards()
			);
		}
	}]);

	return CardStack;
}(_react2.default.Component);

exports.default = CardStack;
;

CardStack.propTypes = {
	height: _react2.default.PropTypes.number,
	width: _react2.default.PropTypes.number,
	backgroundColor: _react2.default.PropTypes.string,
	hoverOffset: _react2.default.PropTypes.number,
	transitionDuration: _react2.default.PropTypes.number
};

CardStack.defaultProps = {
	height: 600,
	width: 350,
	backgroundColor: 'f8f8f8',
	hoverOffset: 30,
	transitionDuration: 300
};