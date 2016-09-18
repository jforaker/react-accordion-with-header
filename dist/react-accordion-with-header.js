(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["ReactAccordionWithHeader"] = factory(require("React"));
	else
		root["ReactAccordionWithHeader"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.AccordionNode = exports.AccordionPanel = exports.AccordionHeader = exports.AccordionWithHeader = undefined;

	var _AccordionWithHeader2 = __webpack_require__(1);

	var _AccordionWithHeader3 = _interopRequireDefault(_AccordionWithHeader2);

	var _AccordionHeader2 = __webpack_require__(3);

	var _AccordionHeader3 = _interopRequireDefault(_AccordionHeader2);

	var _AccordionPanel2 = __webpack_require__(4);

	var _AccordionPanel3 = _interopRequireDefault(_AccordionPanel2);

	var _AccordionNode2 = __webpack_require__(6);

	var _AccordionNode3 = _interopRequireDefault(_AccordionNode2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.AccordionWithHeader = _AccordionWithHeader3.default;
	exports.AccordionHeader = _AccordionHeader3.default;
	exports.AccordionPanel = _AccordionPanel3.default;
	exports.AccordionNode = _AccordionNode3.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var arrayify = function arrayify(obj) {
		return [].concat(obj);
	};

	// removes duplicate from array
	var dedupeArr = function dedupeArr(arr) {
		return arr.filter(function (item, index, inputArray) {
			return inputArray.indexOf(item) === index;
		});
	};

	var AccordionWithHeader = function (_Component) {
		_inherits(AccordionWithHeader, _Component);

		function AccordionWithHeader(props) {
			_classCallCheck(this, AccordionWithHeader);

			return _possibleConstructorReturn(this, (AccordionWithHeader.__proto__ || Object.getPrototypeOf(AccordionWithHeader)).call(this, props));
		}

		_createClass(AccordionWithHeader, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: this.props.className || 'accordion-with-header-container',
						role: 'tablist',
						style: this.props.style },
					this.props.children
				);
			}
		}]);

		return AccordionWithHeader;
	}(_react.Component);

	exports.default = AccordionWithHeader;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AccordionHeader = function (_Component) {
		_inherits(AccordionHeader, _Component);

		function AccordionHeader(props) {
			_classCallCheck(this, AccordionHeader);

			return _possibleConstructorReturn(this, (AccordionHeader.__proto__ || Object.getPrototypeOf(AccordionHeader)).call(this, props));

			// let activeItems = arrayify(props.activeItems);
			//
			// // can't have multiple active items, just use the first one
			// if (!props.allowMultiple) activeItems = [activeItems[0]]
			//
			// this.state = {
			// 	isExpanded: this
			// };
		}

		_createClass(AccordionHeader, [{
			key: 'handleClick',
			value: function handleClick(ev) {
				ev.preventDefault();
				this.props.handleCLickState();
			}
		}, {
			key: 'render',
			value: function render() {

				var style = {
					cursor: 'pointer',
					margin: 0,
					color: this.props.titleColor || 'red'
				};

				console.log('AccordionHeader this.props.isExpanded', this.props.isExpanded);

				return _react2.default.createElement(
					'div',
					{ className: 'accordion-header',
						onClick: this.handleClick.bind(this),
						style: style },
					this.props.children
				);
			}
		}]);

		return AccordionHeader;
	}(_react.Component);

	exports.default = AccordionHeader;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AccordionPanel = function (_Component) {
		_inherits(AccordionPanel, _Component);

		function AccordionPanel(props) {
			_classCallCheck(this, AccordionPanel);

			var _this = _possibleConstructorReturn(this, (AccordionPanel.__proto__ || Object.getPrototypeOf(AccordionPanel)).call(this, props));

			_this.state = {
				maxHeight: props.expanded ? 'none' : 0,
				overflow: props.expanded ? 'visible' : 'hidden',
				duration: 300
			};
			return _this;
		}

		_createClass(AccordionPanel, [{
			key: 'getExpanded',
			value: function getExpanded() {
				var properties = {
					className: (0, _classnames2.default)('react-sanfona-item', this.props.className, { 'react-sanfona-item-expanded': this.props.isExpanded }, this.props.expandedClassName && _defineProperty({}, this.props.expandedClassName, this.props.isExpanded)),
					role: 'tabpanel',
					style: this.props.style
				};

				return properties;
			}
		}, {
			key: 'render',
			value: function render() {

				var style = {
					maxHeight: 200,
					display: this.props.isExpanded ? 'block' : 'none'
				};

				console.log('AccordionPanel this.props.isExpanded', this.props.isExpanded);

				return _react2.default.createElement(
					'div',
					_extends({}, this.getExpanded(), { className: 'accordion-panel', style: style }),
					this.props.children
				);
			}
		}]);

		return AccordionPanel;
	}(_react.Component);

	exports.default = AccordionPanel;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _utils = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by jakeforaker on 9/17/16.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	// import uuid from 'uuid';


	var AccordionNode = function (_Component) {
		_inherits(AccordionNode, _Component);

		function AccordionNode(props) {
			_classCallCheck(this, AccordionNode);

			var _this = _possibleConstructorReturn(this, (AccordionNode.__proto__ || Object.getPrototypeOf(AccordionNode)).call(this, props));

			_this.state = {
				maxHeight: props.expanded ? 'none' : 0,
				overflow: props.expanded ? 'visible' : 'hidden',
				duration: 300,
				expanded: false
			};
			return _this;
		}

		_createClass(AccordionNode, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				// this.uuid = uuid.v4();
			}
		}, {
			key: 'renderNodeItems',
			value: function renderNodeItems(props) {
				var _this2 = this;

				if (!this.props.children) {
					return null;
				}

				var children = (0, _utils.arrayify)(this.props.children);

				return children.map(function (item, index) {
					//render the AccordionNode
					var el = _react2.default.cloneElement(item, {
						className: (0, _classnames2.default)('accordion-node', _this2.props.className),
						key: index,
						ref: 'accordion-node-' + (index === 0 ? 'header' : 'panel'),
						// identifier: this.uuid,
						handleCLickState: function handleCLickState(item) {
							return _this2.handleCLick(item);
						},
						isExpanded: _this2.state.expanded
					});
					return el;
				});
			}
		}, {
			key: 'handleCLick',
			value: function handleCLick(foo) {
				console.log('foo ', foo);
				this.setState({ expanded: !this.state.expanded });
				console.log('this.state ', this.state);
			}
		}, {
			key: 'render',
			value: function render() {

				console.log('this.props  NODE_____', this.props);
				return _react2.default.createElement(
					'div',
					{ className: (0, _classnames2.default)('accordion-node', this.props.className) },
					this.renderNodeItems()
				);
			}
		}]);

		return AccordionNode;
	}(_react.Component);

	exports.default = AccordionNode;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by jakeforaker on 9/17/16.
	 */
	var arrayify = exports.arrayify = function arrayify(obj) {
	  return [].concat(obj);
	};

	// removes duplicate from array
	var dedupeArr = exports.dedupeArr = function dedupeArr(arr) {
	  return arr.filter(function (item, index, inputArray) {
	    return inputArray.indexOf(item) === index;
	  });
	};

/***/ }
/******/ ])
});
;