import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

// Route components
import Form from './Form';
import DownloadPage from './DownloadPage';

class App extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      value: ''
    };

    this.state = this.initialState;
  }

  componentDidMount() {
    // We set the cookie here because this is the first route the app hits,
    //    not express's "/" route
    this.setCookie();
  }

  setCookie() {
    fetch('/auth/set', { credentials: 'include' });
  }

  render() {
    return (
      <div className="app">
        <header className="header__homepage animate-slide-down">
          <h1 className="h1__title animate-slide-up">
            Webpack Config Generator
          </h1>
        </header>
        {/* Treat these routes as if they're just regular components 
            that happen to be nested within an if statement */}
        <main className="main__homepage">
          <Switch>
            <Route exact path="/download" component={DownloadPage} />
            <Route exact path="/" render={() => <Form />} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default hot(module)(App);
