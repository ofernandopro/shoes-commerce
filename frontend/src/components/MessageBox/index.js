import React, { Fragment } from 'react';

function MessageBox(props) {
  return (
    <Fragment>
      <div className={`alert alert-${props.variant || 'info'}`}>
        <div className="icon-messagebox">
          {(props.variant === 'danger') ? <i class="fas fa-times"></i> : ''}
          {(props.variant === 'success') ? <i class="fas fa-check"></i> : ''}
        </div>
        <div className="message-messagebox">
          <p>{props.children}</p>
        </div>
      </div>
      <div className="white-space-30"></div>
    </Fragment>
  )
}

export default MessageBox;
