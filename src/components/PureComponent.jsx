import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {enablePropertyAccesor} from '../code/PropertyAccessors'

class PureComponent extends React.Component {
  constructor(props) {
    super(props);
    enablePropertyAccesor(this);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
}

export default PureComponent;
