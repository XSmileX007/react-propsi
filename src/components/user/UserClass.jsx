import React from "react";

export default class UserClass extends React.Component {
  render() {
    const { ime, godine } = this.props;

    return (
      <p>
        Moje ime je {ime} a imam godina {godine}
      </p>
    );
  }
}
