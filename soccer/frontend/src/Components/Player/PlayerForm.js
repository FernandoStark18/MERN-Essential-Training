import React from "react";

class PlayerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="row">
        <h1 className="center">Add a new player</h1>
        <form class="col s12" onSubmit={this.submitPlayer.bind(this)}>
          <div class="row">
            <div class="input-field col s6">
              <input id="firstName" ref="firstName" type="text" />
              <label htmlFor="firstName">First Name</label>
            </div>
            <div class="input-field col s6">
              <input id="lastName" ref="lastName" type="text" />
              <label htmlFor="lastName">Last Name</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <input id="phone" ref="phone" type="text" />
              <label htmlFor="phone">Phone</label>
            </div>
            <div class="input-field col s6">
              <input id="email" ref="email" type="text" />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <button
            className="btn waver-effect waver-light"
            type="sumbit"
            name="action"
          >
            Add Player
          </button>
        </form>
      </div>
    );
  }
}

export default PlayerForm;
