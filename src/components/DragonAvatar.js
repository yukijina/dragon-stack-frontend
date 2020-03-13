import React, { Component } from 'react';
import { patchy, plain, skinny, slender, sporty, spotted, stocky, striped } from '../assets';

const propertyMap = {
  backgroundColor: { 
    black: '#263238',
    white: '#cfd8dc', 
    green: 'a5d6a7', 
    blue: '#0277bd'
  },
  build: { slender, stocky, sporty, skinny},
  pattern: { plain, striped, spotted, patchy },
  size: {small: 100, medium: 140, large: 180, enormous: 220 }
}

class DragonAvatar extends Component {
  render() {
    // destructuring
    const { generationId, dragonId, traits} = this.props.dragon;

    if(!dragonId) return <div></div>

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