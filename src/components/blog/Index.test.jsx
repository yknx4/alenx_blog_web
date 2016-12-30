// Chai Imports
import { expect } from 'chai';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';
import { fromJS } from 'immutable'
chai.use(chaiImmutable);

// React Imports
import React from 'react';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';

// Components Imports
import {Index} from './Index';

// Extra Imports
import posts from '../../test_posts.json'
const postsData = fromJS(posts.data);

// Tests
it('renders without crashing', () => {
  renderIntoDocument(
    <Index posts={postsData}/>
  );
});

it('renders articles', () => {
  const element = renderIntoDocument(
    <Index posts={postsData}/>
  );

  const articles = scryRenderedDOMComponentsWithTag(element, 'article');
  expect(articles.length).to.equal(posts.data.length);
});
