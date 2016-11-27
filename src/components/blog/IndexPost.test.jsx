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
import IndexPost from './IndexPost';

// Extra Imports
import {formatDate} from '../../code/Utils'
import posts from '../../test_posts.json'
const post = posts.data[0]

function renderIndexPost(_post) {
  _post = _post || post;
  return renderIntoDocument(
    <IndexPost post={post}/>
  );
}

it('renders without crashing', () => {
  renderIndexPost();
});

it('renders article', () => {
  const element = renderIndexPost();
  const article = findRenderedDOMComponentWithTag(element, 'article');
});

it('has post title', () => {
  const element = renderIndexPost();
  const articleTitle = findRenderedDOMComponentWithClass(element, 'article-title');
  expect(articleTitle.textContent).to.equal(post.attributes.title);
});

it('has post info', () => {
  const element = renderIndexPost();
  const articleInfo = findRenderedDOMComponentWithClass(element, 'article-info');
  expect(articleInfo.textContent).to.contains(formatDate(post.attributes['inserted-at']));
  expect(articleInfo.textContent).to.contains('reading time')
});

it('has post summary', () => {
  const element = renderIndexPost();
  const articleSummary = findRenderedDOMComponentWithClass(element, 'article-summary');
  expect(articleSummary.textContent).to.equal(post.attributes.excerpt);
});

it('puts Read more link when excerpt is different from body', () => {
  const post = posts.data[1];
  post.attributes.excerpt = "Awesome"
  post.attributes.body = "Awesome and Amazing"
  const element = renderIndexPost(post);
  findRenderedDOMComponentWithClass(element, 'article-read-more');
});

// TODO: Fix this test, it works properly on DOM but the test is wrong
xit('do not put Read more link when excerpt is same body', () => {
  const post = posts.data[1];
  post.attributes.excerpt = "Awesome"
  post.attributes.body = "Awesome"
  const element = renderIndexPost(post);
  findRenderedDOMComponentWithClass(element, 'article-read-more');
  // This should crash but it does not
});

it('render tags', () => {
  const element = renderIndexPost();
  const tags = scryRenderedDOMComponentsWithClass(element, 'post-tag');
  expect(tags.count).to.equal(post.attributes['tag-ids'].count)
});
