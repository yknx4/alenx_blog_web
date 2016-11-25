import { expect } from 'chai';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);

import React from 'react';
import Badge from './Badge';
import {
  renderIntoDocument,
} from 'react-addons-test-utils';

import Settings from '../blog_settings.json'

it('renders without crashing', () => {
  const badge = Settings.badges[0];
  renderIntoDocument(
    <Badge badge={badge}/>
  );
});

