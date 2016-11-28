import React from 'react'
import PureComponent from './PureComponent'

// Waiting for https://github.com/facebook/react/issues/2127 to be closed
function Wrapper(props) {
  return (
    <span>
      {props.children}
    </span>
  );
}

export default Wrapper
