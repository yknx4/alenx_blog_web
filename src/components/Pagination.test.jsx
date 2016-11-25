import { expect } from 'chai';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);

import React from 'react';
import ReactDOM from 'react-dom';
import Pagination from './Pagination';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';

it('renders without crashing', () => {
  const links = require('../test_posts.json').links;
  renderIntoDocument(
    <Pagination pages={links}/>
  );
});

