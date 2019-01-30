'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _enzyme = require('enzyme');

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('render correctly Icon component', function () {
  var iconComponent = _reactTestRenderer2.default.create(_react2.default.createElement(_Icon2.default, {
    color: '#000',
    type: _Icon.Icons.calendar
  })).toJSON();
  expect(iconComponent).toMatchSnapshot();
});

//# sourceMappingURL=Icon.test.js.map