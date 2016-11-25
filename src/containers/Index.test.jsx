import { expect } from 'chai';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);

import React from 'react';
import ReactDOM from 'react-dom';
import Index from './Index';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';

it('renders without crashing', () => {
  const posts = require('./../test_posts.json').data;
  const element = renderIntoDocument(
    <Index posts={posts}/>
  );

  const divs = scryRenderedDOMComponentsWithTag(element, 'div');

  expect(divs.length).to.equal(posts.length + 1);
  expect(divs[0].className).to.equal('index');
  expect(divs[1].className).to.equal('post');
  expect(divs[2].className).to.equal('post');
});

