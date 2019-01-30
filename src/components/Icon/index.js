import React from 'react';
import PropTypes from 'prop-types'
import Icons from './icons'
import { Ripple } from './style'


const Icon = ({ ripple, style, color, size, type, badge, badgeColor }) => {
  const styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle',
    },
    path: {
      fill: color,
    },
    badge: {
      fill: badgeColor,
    },
    circle: {
      fill: '#fff',
    },
  };

  const badgeNumber = badge > 8 ? 'plus' : badge;

  return (
    <Ripple ripple={ripple}>
      <svg
        style={{ ...styles.svg, ...style }}
        width={`${size}em`}
        height={`${size}em`}
        viewBox="0 0 1024 1024"
      >
        <g>
          {
            Icons[type] && Icons[type].path
              ? <path style={styles.path} d={ Icons[type].path} />
              :  Icons[type] && Icons[type].markup
          }
          {
            badge &&
            <g>
              <circle style={styles.circle} cx="310" cy="290" r="270" />
              <path style={styles.badge} d={Icons.badge[badgeNumber]} />
            </g>
          }
        </g>
      </svg>
    </Ripple>
  );
};

Icon.propTypes = {
  size: PropTypes.number,
  type: PropTypes.string,
  color: PropTypes.string.isRequired,
  ripple: PropTypes.boolean,
  badge: PropTypes.number,
  badgeColor: PropTypes.string,
};

Icon.defaultProps = {
  size: 1.8,
  color: '#fff',
  badge: 0,
  badgeColor: '#08798c',
  ripple: true,
};

export default Icon
export { Icons }
