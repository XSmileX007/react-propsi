import React from "react";
import UserFunction from "./components/user/UserFunction";

class App extends React.Component {
  state = {
    korisnici: [
      { id: 1, ime: "Marko", godine: 25 },
      { id: 2, ime: "Ana", godine: 24 },
      { id: 3, ime: "Ivo", godine: 32 },
      { id: 5, ime: "Pero", godine: 38 },
    ],
  };

  handleButtonPress = () => {
    const { korisnici } = this.state;
    /*const noviKorisnici = korisnici.map((korisnik) => {
      return { ...korisnik, godine: korisnik.godine + 1 };
    });
*/
    let noviKorisnici = [];
    for (let i = 0; i < korisnici.length; i++) {
      let korisnik = korisnici[i];
      korisnik.godine = korisnik.godine + 1;
      noviKorisnici[i] = korisnik;
    }
    this.setState({ korisnici: noviKorisnici });
  };

  promjenaImena = (event, index) => {
    const { korisnici } = this.state;
    // 1: kreiranje novog objekta putem spread operatora [...varijabla]
    //let noviKorisnici = [...korisnici];

    // 2: kreiranje novog objekta
    let noviKorisnici = [];
    for (let i = 0; i < korisnici.length; i++) {
      let korisnik = korisnici[i];
      noviKorisnici[i] = korisnik;
    }

    // mijenjamo samo prvog korisnika u arrayu
    noviKorisnici[index].ime = event.target.value;
    this.setState({ korisnici: noviKorisnici });
  };

  render() {
    const { korisnici } = this.state;
    return (
      <div>
        <button onClick={this.handleButtonPress}>Promjeni godine</button>

        {korisnici.map((korisnik, index) => (
          <UserFunction
            key={korisnik.id}
            ime={korisnik.ime}
            godine={korisnik.godine}
            onNameChange={(event) => this.promjenaImena(event, index)}
          ></UserFunction>
        ))}
      </div>
    );
  }
}

export default App;
