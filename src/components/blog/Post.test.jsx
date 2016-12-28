// Chai Imports
import { expect } from 'chai';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);

// React Imports
import React from 'react';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithTag,
  findRenderedDOMComponentWithClass,
  scryRenderedDOMComponentsWithClass
} from 'react-addons-test-utils';

// Components Imports
import {Post} from './Post';

// Extra Imports
import {formatDate} from '../../code/Utils'
import posts from '../../test_posts.json'
const post = posts.data[0];

function renderPost(_post) {
  _post = _post || post;
  return renderIntoDocument(
    <Post post={_post}/>
  );
}

let element;
beforeEach(() => {
  element = renderPost()
});

it('renders without crashing', () => {
});

it('renders article', () => {
  const article = findRenderedDOMComponentWithTag(element, 'article');
});

it('has post comments', () => {
  const articleTitle = findRenderedDOMComponentWithClass(element, 'fb-comments');
});

it('has post likes', () => {
  const articleInfo = findRenderedDOMComponentWithClass(element, 'fb-like');
});

it('render tags', () => {
  const tags = scryRenderedDOMComponentsWithClass(element, 'post-tag');
  expect(tags.count).to.equal(post.attributes['tag-ids'].count)
});
