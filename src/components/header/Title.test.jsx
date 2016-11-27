// Chai Imports
import { expect } from 'chai';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);

// React Imports
import React from 'react';
import ReactDOMServer from 'react-dom/server'
import {
  renderIntoDocument,
  findRenderedDOMComponentWithClass
} from 'react-addons-test-utils';

// Components Imports
import {Title} from './Title';

// Extra Imports
import Settings from '../../blog_settings.json'
import _ from 'lodash'

// Tests
it('renders without crashing', () => {
  renderIntoDocument(
    <Title type="main"/>,
    <Title type="post"/>,
    <Title type="page"/>
  );
});

it('has properties defined', () => {
  const element = new Title({title: "title"});
  const properties = [
    'title',
    'subtitle',
    'tagline',
    'badges',
    'date',
    'type'
  ]
  _.forEach(properties, property =>
    expect(element.hasOwnProperty(property)).to.equal(true)
  );
});

it('only has title when it is a page', () => {
  const title = "my title"
  const element = ReactDOMServer.renderToStaticMarkup(
    <Title type="page" title={title}/>
  );
  expect(element).to.equal(`<h1 class="title">${title}</h1>`)
});

it('has title and date when it is a post', () => {
  const title = "my title"
  const element = renderIntoDocument(
    <Title type="post" title={title} date={title}/>
  );
  const titleH1 = findRenderedDOMComponentWithClass(element, 'title');
  expect(titleH1.textContent).to.equal(title);
  expect(titleH1.textContent).to.contains('reading time')
});
