import { expect } from 'chai';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);

import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from './Header';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  createRenderer
} from 'react-addons-test-utils';
import Settings from '../blog_settings.json'

it('renders without crashing', () => {
  const renderer = createRenderer();
  renderer.render(<Header title={Settings.title}/>);
  const result = renderer.getRenderOutput();
});
