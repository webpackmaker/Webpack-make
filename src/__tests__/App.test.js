import React from 'react';
import MyComponent from '../App';

describe('components', () => {
  describe('App', () => {
    it('should render without crashing', () => {
      shallow(<MyComponent />);
    });
  });
});
