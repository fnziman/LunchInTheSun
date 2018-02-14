import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.errors = this.errors.bind(this);
  }
  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }
  errors() {
    if (this.props.errors)
    return (
      <ul>
        {this.props.errors.map((error, i) => <li key={i}>{error}</li>)}
      </ul>
    );
  }

  render() {

    return (
      <div className="session">
        <h1>{this.props.type}</h1>
        <form className="session-form" onSubmit={this.handleSubmit}>
          <label>username
            <input type='text'
              value={this.state.username}
              onChange={this.update('username')}
            />
          </label>
          <label>passsword
            <input type='password'
              value={this.state.passsword}
              onChange={this.update('password')}
              />
          </label>
          <input type='submit' value={this.props.type}/>
        </form>
        {this.errors()}
      </div>
    );
  }
}

export default withRouter(SessionForm);
