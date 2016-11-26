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
    // console.log(`Defining property ${name} with default of type ${typeof defaultValue}`)
    Object.defineProperty(this, name, {
      get: () => {
        const finalDefaultValue = typeof defaultValue === 'function' ? new defaultValue() : defaultValue;
        return this.fetch(name, finalDefaultValue);
      },
      enumerable: true
    });
  }

  properties(properties) {
    _.forEach(properties, (value, key) => {
      this.property(key, value);
    });
  }
}

export default PureComponent;
