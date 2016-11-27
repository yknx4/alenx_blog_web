import React from 'react'
import PureComponent from './PureComponent'

function Wrapper(props) {
  return (
    <div>
      {props.children}
    </div>
  );
}

export default Wrapper
