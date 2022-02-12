import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PropTypes from 'prop-types';

const Expand = ({ title, children, rotation, onExpand, isVisible }) => (
  <div className="expand border">
    <div className="expand__header">
      <span className="expand__title">{title}</span>
      <button className="expand__toggle-btn" onClick={onExpand}>
        <FontAwesomeIcon icon="fas fa-chevron-up" rotation={rotation} />
      </button>
    </div>
    {isVisible ? (
      <div className="expand__content">{children}</div>
    ) : (
      <div className="expand__content"></div>
    )}
  </div>
);

Expand.propTypes = {
  isVisible: PropTypes.bool,
  children: PropTypes.element,
  title: PropTypes.string,
  onExpand: PropTypes.func.isRequired,
};

Expand.defaultProps = {
  isVisible: false,
  title: '',
};

export default Expand;
