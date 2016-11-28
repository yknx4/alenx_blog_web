import React from 'react';
import { App } from './App';
import Settings from '../blog_settings.json';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';
import {
  createRenderer,
} from 'react-addons-test-utils';

chai.use(chaiImmutable);

it('renders without crashing', () => {
  const renderer = createRenderer();
  renderer.render(
    <App themeColor={Settings.themeColor} />
  );
  renderer.getRenderOutput();
});
