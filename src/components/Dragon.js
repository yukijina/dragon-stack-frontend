import React, { Component } from 'react';


const DEFAULT_DRAGON = {
  dragonId: '',
  generationId: '',
  nickname: '',
  birthdate: '',
  traits: []  
}

class Dragon extends Component {
  state = {
    dragon: DEFAULT_DRAGON
  }

  componentDidMount() {
    this.fetchDragon();
  }

  fetchDragon = () => {
    fetch('http://localhost:3000/dragon/new')
    .then(response => response.json())
    .then(json => this.setState({ dragon: json.dragon }))
    .catch(error => console.log('error: ', error))
  }

  render() {
    // destructuring
    const { generationId, dragonId, traits } = this.state.dragon;

    return(
      <div>
        <span>Generation: {generationId}.</span>
        <span>Dragon: {dragonId}.</span>

        { traits.map(trait => trait.traitValue).join(', ') }
      </div>
    )
  }
}

export default Dragon;