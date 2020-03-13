import React, { Component } from 'react';

class DragonAvatar extends Component {
  render() {
    // destructuring
    const { generationId, dragonId, traits} = this.props.dragon;

    return(
      <div>
        <span>Generation: {generationId}.</span>
        <span>Dragon: {dragonId}.</span>

        { traits.map(trait => trait.traitValue).join(', ') }
      </div>
    )

  }
}

export default DragonAvatar;