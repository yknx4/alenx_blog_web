import React from 'react';
import ReactDOM from 'react-dom';
import PostsIndex from './PostsIndex';
import { expect } from 'chai';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PostsIndex />, div);
});

