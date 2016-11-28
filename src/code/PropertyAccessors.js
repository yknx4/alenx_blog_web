import _ from 'lodash';

function _fetch(_this, field, propName, defaultValue = "") {
  if(_.isUndefined(_this[field])) {
    console.warn(`The object do not contain property "${field}"`);
    // console.log(_this);
    return defaultValue;
  }
  return _this[field][propName] || defaultValue;
}

function _property(_this, functionName, name, defaultValue="") {
  // console.log(`Defining property ${name} with default of type ${typeof defaultValue}`)
  Object.defineProperty(_this, name, {
    get: () => {
      const finalDefaultValue = typeof defaultValue === 'function' ? new defaultValue() : defaultValue;
      return _this[functionName](name, finalDefaultValue);
    },
    enumerable: true
  });
}

function _properties(_this, functionName, properties) {
  _.forEach(properties, (value, key) => {
    _this[functionName](key, value);
  });
}

function enablePropertyAccesor(object) {
  const mixin = {
    fetch: _fetch.bind(object, object, 'props'),
    fetchParam: _fetch.bind(object, object.props, 'params'),
    property: _property.bind(object, object, 'fetch'),
    properties: _properties.bind(object, object, 'property'),
    parameter: _property.bind(object, object, 'fetchParam'),
    parameters: _properties.bind(object, object, 'parameter')
  };
  _.mixin(object, mixin);
}

export {enablePropertyAccesor}