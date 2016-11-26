import { expect } from 'chai';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);

import React from 'react';
import {Index} from './Index';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import posts from '../../test_posts.json'

it('renders without crashing', () => {
  const element = renderIntoDocument(
    <Index posts={posts.data}/>
  );

  const articles = scryRenderedDOMComponentsWithTag(element, 'article');

  expect(articles.length).to.equal(posts.data.length);
});
