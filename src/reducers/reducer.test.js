import { expect } from 'chai';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);


import {List, Map, fromJS} from 'immutable';

import reducer from './reducer';

import TestPosts from '../test_posts.json'

it('handles state', () => {
  const initialState = Map();
  const action = {
    type: 'SET_STATE',
    state: Map({
      posts: List(TestPosts.data),
      pages: Map(TestPosts.links)
    })
  };
  const nextState = reducer(initialState, action);

  expect(nextState).to.equal(fromJS({
    posts: List(TestPosts.data),
    pages: Map(TestPosts.links)
  }));
});

it('handles SET_STATE with plain JS payload', () => {
  const initialState = Map();
  const action = {
    type: 'SET_STATE',
    state: {
      posts: TestPosts.data,
      pages: TestPosts.links
    }
  };
  const nextState = reducer(initialState, action);

  expect(nextState).to.equal(fromJS({
    posts: TestPosts.data,
    pages: TestPosts.links
  }));
});

it('handles SET_STATE without initial state', () => {
  const initialState = undefined;
  const action = {
    type: 'SET_STATE',
    state: Map({
      posts: List(TestPosts.data),
      pages: Map(TestPosts.links)
    })
  };
  const nextState = reducer(initialState, action);

  expect(nextState).to.equal(fromJS({
    posts: List(TestPosts.data),
    pages: Map(TestPosts.links)
  }));
});