import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ message, type }) => (
  <div className="gnomes-message">
    <div className={`message is-${type}`}>
      <div className="message-body">
        {message}
      </div>
    </div>
  </div>
);

Message.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Message;
