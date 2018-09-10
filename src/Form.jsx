import React from 'react';
import { withRouter } from 'react-router-dom';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      entry: '',
      entryDir: '',
      output: '',
      outputDir: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    const { history } = this.props;
    event.preventDefault();
    fetch('http://localhost:4000/api/configurator/create', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin', //supposed to add cookies to fetch request
      body: JSON.stringify({
        answers: {
          cookieID: document.cookie,
          0: event.target.entry.value, //this.entry.value,
          1: event.target.entryDir.value,
          2: event.target.output.value, // this.output.value
          3: event.target.outputDir.value
        }
      })
    })
      .then(function(response) {
        return response;
      })
      .then(function(response) {
        if (response.status === 200) {
          history.push('/download');
        }
      });
  }

  render() {
    return (
      <div className="form-page">
        <h2 className="h2__form-heading">
          Answer these questions to generate your configuration!
        </h2>
        <form onSubmit={this.handleSubmit} className="form__questionnaire">
          <label> What is the name of your entry file? </label>
          <input
            name="entry"
            type="text"
            value={this.state.entry}
            onChange={this.handleChange}
          />
          <label> Where is your entry file located? </label>
          <input
            name="entryDir"
            type="text"
            value={this.state.entryDir}
            onChange={this.handleChange}
          />
          <label> What would you like to call your bundle file? </label>
          <input
            name="output"
            type="text"
            value={this.state.output}
            onChange={this.handleChange}
          />
          <label> What name would you like to call your bundle folder? </label>
          <input
            name="outputDir"
            type="text"
            value={this.state.outputDir}
            onChange={this.handleChange}
          />

          <input type="submit" value="Submit" onSubmit={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

export default withRouter(Form);
