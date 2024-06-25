import React from "react";

export default class NoviKorisnik extends React.Component {
  state = { novoIme: "", noveGodine: "" };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { novoIme, noveGodine } = this.state;
    const { onUserSubmit } = this.props;
    onUserSubmit({ novoIme, noveGodine });
    // resetirati stanje komponente
    this.setState({ novoIme: "", noveGodine: "" });
  };

  handleChangeIme = (event) => {
    this.setState({ novoIme: event.target.value });
  };

  handleChangeGodine = (event) => {
    this.setState({ noveGodine: parseInt(event.target.value) });
  };

  render() {
    const { novoIme, noveGodine } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>Ime korisnika:</label>
        <input
          type="text"
          placeholder="Ime"
          onChange={this.handleChangeIme}
          value={novoIme}
        ></input>
        <label>Godine korisnika:</label>
        <input
          type="text"
          placeholder="Godine"
          onChange={this.handleChangeGodine}
          value={noveGodine}
        ></input>

        <button type="submit">Unesi</button>
      </form>
    );
  }
}
