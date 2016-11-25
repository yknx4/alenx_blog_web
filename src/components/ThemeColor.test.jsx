import { expect } from 'chai';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);

import React from 'react';
import ReactDOM from 'react-dom';
import ThemeColor from './ThemeColor';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';

it('renders without crashing', () => {
  renderIntoDocument(
    <ThemeColor name="white"/>
  );
});

it('sets body class', () => {
  renderIntoDocument(
    <ThemeColor name="white"/>
  );
  expect(document.body.className).to.equal('color-scheme-white')
});

var node, component;
var color = "white";

beforeEach(function(){
  node = document.createElement('div');
  component = ReactDOM.render(<ThemeColor name={color} />, node);
});


it('changes body class when changed', () => {
  expect(document.body.className).to.equal(`color-scheme-${color}`);
  color = 'black';
  ReactDOM.render(<ThemeColor name={color} />, node);
  expect(document.body.className).to.equal(`color-scheme-${color}`);


});