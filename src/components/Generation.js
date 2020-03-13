import React, { Component } from 'react';

const DEFAULT_GENERATION = { generationId: '', expiration: ''}

const MININUM_DELAY = 3000;

class Generation extends Component {
  state = {
    generation: DEFAULT_GENERATION
  };

  timer = null;

  componentDidMount() {
    this.fetchNextGeneration()
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  fetchGeneration = () => {
    console.log("hitting")
    fetch('http://localhost:3000/generation')
    .then(response => response.json())
    .then(json => { 
      console.log('json:', json)
      this.setState({ generation: json.generation })
    })
    .catch(err => console.log('error:', error));
  }

  fetchNextGeneration = () => {
    this.fetchGeneration();

    let delay = new Date(this.state.generation.expiration).getTime() - new Date().getTime();

    if (delay < MININUM_DELAY) {
      delay = MININUM_DELAY
    }

    this.timer = setTimeout(() => this.fetchNextGeneration(), delay);
  }


  render() {
    const {generation} = this.state

    return (
      <div>
        <h3>Generation {generation.generationId}. Expires on:</h3>
        <h4>{new Date(generation.expiration).toString()}</h4>
      </div>
    )
  }
}

export default Generation;
