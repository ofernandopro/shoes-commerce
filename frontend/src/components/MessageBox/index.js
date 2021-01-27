import React, { Fragment } from 'react';

function MessageBox(props) {
  return (
    <Fragment>
      <div className={`alert alert-${props.variant || 'info'}`}>
        <i class="fas fa-times"></i>
        {props.children}
      </div>
      <div className="white-space-30"></div>
    </Fragment>
  )
}

export default MessageBox;
