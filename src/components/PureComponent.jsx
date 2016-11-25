import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';

class PureComponent extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
}

export default PureComponent;