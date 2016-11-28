import _ from 'lodash';
function fetch(_this, propName, defaultValue="") {
  return _this.props[propName] || defaultValue;
}

function property(_this, name, defaultValue="") {
  // console.log(`Defining property ${name} with default of type ${typeof defaultValue}`)
  Object.defineProperty(_this, name, {
    get: () => {
      const finalDefaultValue = typeof defaultValue === 'function' ? new defaultValue() : defaultValue;
      return _this.fetch(name, finalDefaultValue);
    },
    enumerable: true
  });
}

function properties(_this, properties) {
  _.forEach(properties, (value, key) => {
    _this.property(key, value);
  });
}

function enablePropertyAccesor(object) {
  const mixin = {
    fetch: fetch.bind(object, object),
    property: property.bind(object, object),
    properties: properties.bind(object, object)
  };
  _.mixin(object, mixin);
}

export {enablePropertyAccesor}