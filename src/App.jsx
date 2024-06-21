import React from "react";
import UserFunction from "./components/user/UserFunction";
import UserClass from "./components/user/UserClass";
import UserChildren from "./components/user/UserChildren";

class App extends React.Component {
  state = {
    korisnici: [
      { ime: "Marko", godine: 25 },
      { ime: "Ana", godine: 24 },
      { ime: "Ivo", godine: 32 },
    ],
    hoby: "Moj hobi je ljuljanje na stolici",
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

  render() {
    const { korisnici } = this.state;

    return (
      <div>
        <button onClick={this.handleButtonPress}>Promjeni godine</button>
        <UserFunction
          ime={korisnici[0].ime}
          godine={korisnici[0].godine}
        ></UserFunction>

        <UserClass
          ime={korisnici[1].ime}
          godine={korisnici[1].godine}
        ></UserClass>

        <UserChildren ime={korisnici[2].ime} godine={korisnici[2].godine}>
          <a href="#">{this.state.hoby}</a>
        </UserChildren>
      </div>
    );
  }
}

export default App;
