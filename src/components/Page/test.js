import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import sinon from 'sinon';

import Page from './';


describe('DavidTest', () => {
  it('correct', () => {
    expect(2 + 2).toBe(4);
  });
});

describe('Page', () => {
  const wrapper = <Page
    title="title"
    paragraphs={['paragraph']}
    titleVariant="h3"
    pageComponent="h3"
  />;

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(wrapper, div);
  });

  it('matches wrapper snapshot', () => {
    expect(mount(wrapper)).toMatchSnapshot('wrapper mount');
  });
});