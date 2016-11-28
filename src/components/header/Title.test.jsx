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
  findRenderedDOMComponentWithClass,
  findRenderedDOMComponentWithTag
} from 'react-addons-test-utils';

// Components Imports
import {Title} from './Title';

// Extra Imports
import Settings from '../../blog_settings.json'
import _ from 'lodash'
import {formatDate} from '../../code/Utils'

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
  const date = new Date()
  const element = renderIntoDocument(
    <Title type="post" title={title} date={date}/>
  );
  const titleH1 = findRenderedDOMComponentWithClass(element, 'title');
  expect(titleH1.textContent).to.equal(title);
  const dateParagraph = findRenderedDOMComponentWithTag(element, 'p');
  expect(dateParagraph.textContent).to.contains(formatDate(date))
});

// TODO: Implement this test
xit('has brand, badges and tagline when it is main title', () => {
  const title = "my title"
  const date = new Date()
  const element = renderIntoDocument(
    <Title type="post" title={title} date={date}/>
  );
  const titleH1 = findRenderedDOMComponentWithClass(element, 'title');
  expect(titleH1.textContent).to.equal(title);
  const dateParagraph = findRenderedDOMComponentWithTag(element, 'p');
  expect(dateParagraph.textContent).to.contains(formatDate(date))
});
