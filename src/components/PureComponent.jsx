import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import _ from 'lodash'

class PureComponent extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  fetch(propName, defaultValue="") {
    return this.props[propName] || defaultValue;
  }

  property(name, defaultValue="") {
    Object.defineProperty(this, name, { get: function () { return this.fetch(name, defaultValue) } });
  }

  properties(properties) {
    _.forEach(properties, (value, key) => {
      this.property(key, value);
    });
  }
}

export default PureComponent;
