import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    // Définition de l'état initial
    this.state = {
      person: {
        fullName: "Jean FAYE",
        profession: "Développeur Web",
        imgSrc: "https://www.xarala.co/blog/content/images/2022/03/200121-developpeur-web.jpeg",
        bio: "Développeur Front-End passionné de React.",
      },
      show: false,
      timeElapsed: 0
    };
    
    // Méthode pour mettre à jour le temps écoulé
    this.intervalId = null;
  }

  // Méthode pour basculer l'affichage du profil
  toggleShow = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  };

  // Méthode de cycle de vie : componentDidMount
  componentDidMount() {
    // Démarrer un intervalle pour calculer le temps écoulé
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({
        timeElapsed: prevState.timeElapsed + 1
      }));
    }, 1000); // Mise à jour toutes les secondes
  }

  // Méthode de cycle de vie : componentWillUnmount
  componentWillUnmount() {
    // Nettoyer l'intervalle lorsque le composant est démonté
    clearInterval(this.intervalId);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, timeElapsed } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {show ? "Masquer le Profil" : "Afficher le Profil"}
        </button>

        {show && (
          <div className="profile">
            <h2>{fullName}</h2>
            <p>{profession}</p>
            <img src={imgSrc} alt={fullName} />
            <p>{bio}</p>
          </div>
        )}

        <div>
          <h3>Temps écoulé depuis le montage : {timeElapsed} secondes</h3>
        </div>
      </div>
    );
  }
}

export default App;
