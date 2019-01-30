'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icons = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _icons = require('./icons');

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(_ref) {
  var style = _ref.style,
      color = _ref.color,
      size = _ref.size,
      type = _ref.type,
      badge = _ref.badge;

  var styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle'
    },
    path: {
      fill: color
    },
    badge: {
      fill: '#08798c'
    },
    circle: {
      fill: '#fff'
    }
  };

  var badgeNumber = badge > 8 ? 'plus' : badge;

  return _react2.default.createElement(
    'div',
    { className: 'ripple' },
    _react2.default.createElement(
      'svg',
      {
        style: Object.assign({}, styles.svg, style),
        width: size + 'em',
        height: size + 'em',
        viewBox: '0 0 1024 1024'
      },
      _react2.default.createElement(
        'g',
        null,
        type.path ? _react2.default.createElement('path', { style: styles.path, d: type.path }) : type.markup,
        badge && badge.length && _react2.default.createElement(
          'g',
          null,
          _react2.default.createElement('circle', { style: styles.circle, cx: '310', cy: '290', r: '270' }),
          _react2.default.createElement('path', { style: styles.badge, d: _icons2.default.badge[badgeNumber] })
        )
      )
    )
  );
};

Icon.propTypes = {
  size: _propTypes2.default.number,
  color: _propTypes2.default.string.isRequired,
  badge: _propTypes2.default.string
};

Icon.defaultProps = {
  size: 1.8,
  color: '#fff',
  badge: ''
};

exports.default = Icon;
exports.Icons = _icons2.default;

//# sourceMappingURL=Icon.js.map