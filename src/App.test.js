import Enzyme from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

describe('render', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = Enzyme.shallow(<App/>);
  });

  it('should render an App title', () => {
    expect(wrapper.find({ testId: 'title' })).toHaveLength(1);
  });
});
