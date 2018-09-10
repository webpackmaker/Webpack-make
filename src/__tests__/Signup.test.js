import React from 'react';
import MyComponent from '../Signup';

describe('components', () => {
  describe('Signup', () => {
    it('should render without crashing', () => {
      shallow(<MyComponent />);
    });
  });
});
