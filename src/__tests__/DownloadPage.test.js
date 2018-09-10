import React from 'react';
import MyComponent from '../DownloadPage';

describe('components', () => {
  describe('DownloadPage', () => {
    it('should render without crashing', () => {
      shallow(<MyComponent />);
    });
  });
});
