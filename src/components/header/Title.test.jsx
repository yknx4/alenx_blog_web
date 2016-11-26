import { expect } from 'chai';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);

import React from 'react';
import {Title} from './Title';
import {
  renderIntoDocument,
} from 'react-addons-test-utils';

import Settings from '../../blog_settings.json'
import _ from 'lodash'

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
