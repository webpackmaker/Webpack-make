import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Extends support for "fetch" to additional browsers
import 'whatwg-fetch';

// Styles
import WebFont from 'webfontloader';
import 'normalize.css';
import './assets/index.css';

WebFont.load({
  google: {
    families: ['Roboto Slab', 'Open Sans']
  }
});

/* 
  Because Hot Module Reloading requires us to call the render
    method twice, we wrap in a function to prevent repetition
*/
let render = () => {
  const App = require('./App').default;
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root')
  );
};

/* 
  If any files are not being hot reloaded,
    add them to this array.
*/
const HOT_RELOAD_THESE_FILES = ['./App', './assets/index.css'];

// Configure Hot Module Reloading
if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept(HOT_RELOAD_THESE_FILES, () => {
      setTimeout(render);
    });
  }
}

// Run app
render();
