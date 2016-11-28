import { expect } from 'chai';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);

import PureComponent from './PureComponent';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
} from 'react-addons-test-utils';

it('fetches a prop', () => {
  const component = new PureComponent({ awesome: 'me!' });
  expect(component.fetch('awesome')).to.equal('me!');
  expect(component.fetch('invalidWithoutDefault')).to.equal('');
  expect(component.fetch('invalidWithDefault', 1)).to.equal(1);
});

it('defines a property', () => {
  const component = new PureComponent({ awesome: 'me!' });
  component.property('awesome');
  component.property('noob', 'you!');

  expect(component.awesome).to.equal('me!');
  expect(component.noob).to.equal('you!');
});

it('defines many properties', () => {
  const component = new PureComponent({ awesome: 'me!', noob: 'you!' });
  component.properties({
    awesome: String,
    noob: String,
    invalid: Array,
  });

  expect(component.awesome).to.equal('me!');
  expect(component.noob).to.equal('you!');
  expect(component.invalid instanceof Array).to.equal(true);
});

class InheritedComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.properties({
      awesome: String,
      noob: String,
      invalid: Array,
    });
  }
}

it('defines a property with class definition', () => {
  const component = new InheritedComponent({ awesome: 'me!', noob: 'you!' });
  expect(component.awesome).to.equal('me!');
  expect(component.noob).to.equal('you!');
});
