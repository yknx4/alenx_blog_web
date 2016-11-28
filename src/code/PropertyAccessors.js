/* eslint new-cap: "off" */
import _ from 'lodash';

function fetch(_this, field, propName, defaultValue = '') {
  if (_.isUndefined(_this[field])) {
    // console.warn(`The object do not contain property "${field}"`);
    // console.log(_this);
    return defaultValue;
  }
  return _this[field][propName] || defaultValue;
}

function property(_this, functionName, name, defaultValue = '') {
  // console.log(`Defining property ${name} with default of type ${typeof defaultValue}`)
  Object.defineProperty(_this, name, {
    get: () => {
      const finalDefaultValue = typeof defaultValue === 'function' ? new defaultValue() : defaultValue;
      return _this[functionName](name, finalDefaultValue);
    },
    enumerable: true,
  });
}

function properties(_this, functionName, propertyList) {
  _.forEach(propertyList, (value, key) => {
    _this[functionName](key, value);
  });
}

function enablePropertyAccessors(object) {
  const mixin = {
    fetch: fetch.bind(object, object, 'props'),
    fetchParam: fetch.bind(object, object.props, 'params'),
    property: property.bind(object, object, 'fetch'),
    properties: properties.bind(object, object, 'property'),
    parameter: property.bind(object, object, 'fetchParam'),
    parameters: properties.bind(object, object, 'parameter'),
  };
  _.mixin(object, mixin);
}

export default enablePropertyAccessors;
