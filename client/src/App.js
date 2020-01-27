import React from 'react';
import './App.scss';
import Nav from "./toggle"


class App extends React.Component {

  
  state = {
    players: []
  };

  

  componentDidMount() {
    fetch(`http://localhost:5000/api/players`)
    .then (res => res.json())

    .then (data => {
      console.log(data)
      this.setState({
        ...this.state, players: data
      })
      
    });  

  }

  
  
  render() {
    return (
      <div className="App-header" data-testid="playersInfo">
        <Nav  />
        {this.state.players.map((player) => {

          return (
            
            <div className="container" >

              <div className="name" >
              Name: {player.name}
              </div>

              <div className="info" >
              Country: {player.country} <br/>

              Searches: {player.searches}
              </div>

            </div>
            
          )
        })}

      </div>
        
    )
  }
} 

export default App;
