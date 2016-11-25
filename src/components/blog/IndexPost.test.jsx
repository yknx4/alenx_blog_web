import { expect } from 'chai';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);

import React from 'react';
import ReactDOM from 'react-dom';
import IndexPost from './IndexPost';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';

it('renders without crashing', () => {
  const post = require('./../../test_posts.json').data[0];
  const element = renderIntoDocument(
    <IndexPost post={post}/>
  );
});

