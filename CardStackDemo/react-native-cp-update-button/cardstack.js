'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ERROR_MESSAGE = 'CardStack component must have at least two child Card components. Please check the children of this CardStack instance.';

var CardStack = function (_React$Component) {
	_inherits(CardStack, _React$Component);

	function CardStack(props) {
		_classCallCheck(this, CardStack);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CardStack).call(this));

		var childrenLength = props.children && props.children.length || 1;
		var headerHeight = props.height / childrenLength;

		if (childrenLength <= 1) throw new Error(ERROR_MESSAGE);

		_this._initialTopOffsets = props.children.map(function (child, i) {
			return i === 0 ? 0 : headerHeight * i;
		});

		_this.state = {
			topOffsets: _this._initialTopOffsets,
			cardSelected: false
		};

		_this.handleCardPress = _this.handleCardPress.bind(_this);
		return _this;
	}

	_createClass(CardStack, [{
		key: 'handleCardPress',
		value: function handleCardPress(id, cb) {
			var _this2 = this;

			var initialState = {
				topOffsets: [],
				cardSelected: true
			};

			var nextState = function nextState(prev, offset, index) {
				var cardSelected = _this2.state.cardSelected;

				var newOffset = index === id ? 0 : _this2.props.height;
				return {
					cardSelected: cardSelected ? false : true,
					topOffsets: [].concat(_toConsumableArray(prev.topOffsets), [cardSelected ? _this2._initialTopOffsets[index] : newOffset])
				};
			};

			_reactNative.LayoutAnimation.configureNext(_reactNative.LayoutAnimation.Presets.spring);
			this.setState(this.state.topOffsets.reduce(nextState, initialState));

			if (cb) cb(this.state.cardSelected, id);
		}
	}, {
		key: 'renderCards',
		value: function renderCards() {
			var _this3 = this;

			var cloneCard = function cloneCard(child, i) {
				return _react2.default.cloneElement(child, {
					key: i,
					cardId: i,
					hoverOffset: _this3.props.hoverOffset,
					cardSelected: _this3.state.cardSelected,
					height: _this3.props.height,
					topOffset: _this3.state.topOffsets[i],
					width: _this3.props.width,
					onPress: _this3.handleCardPress
				});
			};
			return this.props.children.map(cloneCard);
		}
	}, {
		key: 'render',
		value: function render() {
			var stackStyles = {
				backgroundColor: this.props.background,
				height: this.props.height,
				width: this.props.width,
				borderWidth: 2,
				borderColor: 'orange'
			};
			return _react2.default.createElement(
				_reactNative.View,
				{ style: [styles.container, stackStyles] },
				this.renderCards()
			);
		}
	}]);

	return CardStack;
}(_react2.default.Component);

exports.default = CardStack;
;

var styles = _reactNative.StyleSheet.create({
	container: {
		position: 'relative',
		overflow: 'hidden',
		padding: 0,
		margin: 0
	}
});

CardStack.propTypes = {
	backgroundColor: _react2.default.PropTypes.string,
	height: _react2.default.PropTypes.number,
	hoverOffset: _react2.default.PropTypes.number,
	width: _react2.default.PropTypes.number
};

CardStack.defaultProps = {
	width: 350,
	height: 600,
	bgColor: 'f8f8f8',
	hoverOffset: 30
};