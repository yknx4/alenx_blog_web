import chai, { expect } from 'chai';
import chaiImmutable from 'chai-immutable';
import { List, Map, fromJS } from 'immutable';
import reducer from './reducer';
import TestPosts from '../test_posts.json';

chai.use(chaiImmutable);

it('handles state', () => {
  const initialState = new Map();
  const action = {
    type: 'SET_STATE',
    state: new Map({
      posts: new List(TestPosts.data),
      pages: new Map(TestPosts.links),
    }),
  };
  const nextState = reducer(initialState, action);

  expect(nextState).to.equal(fromJS({
    posts: new List(TestPosts.data),
    pages: new Map(TestPosts.links),
  }));
});

it('handles SET_STATE with plain JS payload', () => {
  const initialState = new Map();
  const action = {
    type: 'SET_STATE',
    state: {
      posts: TestPosts.data,
      pages: TestPosts.links,
    },
  };
  const nextState = reducer(initialState, action);

  expect(nextState).to.equal(fromJS({
    posts: TestPosts.data,
    pages: TestPosts.links,
  }));
});

it('handles SET_STATE without initial state', () => {
  const initialState = undefined;
  const action = {
    type: 'SET_STATE',
    state: new Map({
      posts: new List(TestPosts.data),
      pages: new Map(TestPosts.links),
    }),
  };
  const nextState = reducer(initialState, action);

  expect(nextState).to.equal(fromJS({
    posts: new List(TestPosts.data),
    pages: new Map(TestPosts.links),
  }));
});
