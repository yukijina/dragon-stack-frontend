import React, { Component } from 'react';
import { connect } from 'react-redux';
import { generationActionCreator } from '../actions/generation';

const DEFAULT_GENERATION = { generationId: '', expiration: ''}

const MININUM_DELAY = 3000;

class Generation extends Component {
  // state = {
  //   generation: DEFAULT_GENERATION
  // };

  timer = null;

  componentDidMount() {
    this.fetchNextGeneration()
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  fetchNextGeneration = () => {
    this.props.fetchGeneration();

    let delay = new Date(this.props.generation.expiration).getTime() - new Date().getTime();

    if (delay < MININUM_DELAY) {
      delay = MININUM_DELAY
    }
    console.log('props!: ', this.props)
    /// create generation automatically
    this.timer = setTimeout(() => this.fetchNextGeneration(), delay);
  }


  render() {
    const {generation} = this.props

    return (
      <div>
        <h3>Generation {generation.generationId}. Expires on:</h3>
        <h4>{new Date(generation.expiration).toString()}</h4>
      </div>
    )
  }
}


const mapStateToProps = state => {
  const generation = state.generation;
  return { generation }
}
  
// const mapDispatchToProps = dispatch => {
//   return {
//     fetchGeneration: () => fetchGeneration(dispatch)
//   }  
// }

const componentConnector = connect(mapStateToProps, { fetchGeneration });

export default componentConnector(Generation);
