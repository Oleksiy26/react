import React from 'react';
import PropTypes from 'prop-types';

const Expand = ({ title, children, onExpand, isVisible }) => (
  <div className="expand border">
    <div className="expand__header">
      <span className="expand__title">{title}</span>
      <button className="expand__toggle-btn" onClick={onExpand}>
        {isVisible ? (
          <i className="fas fa-chevron-up"></i>
        ) : (
          <i className="fas fa-chevron-down"></i>
        )}
      </button>
    </div>
    {isVisible ? <div className="expand__content">{children}</div> : null}
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
