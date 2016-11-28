import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import Settings from '../blog_settings.json';
import { expect } from 'chai';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  createRenderer,
} from 'react-addons-test-utils';

it('renders without crashing', () => {
  const renderer = createRenderer();
  renderer.render(
    <App themeColor={Settings.themeColor} />
  );
  const result = renderer.getRenderOutput();
});
