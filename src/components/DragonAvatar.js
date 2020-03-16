import React, { Component } from 'react';
import { patchy, plain, skinny, slender, sporty, spotted, stocky, striped } from '../assets';

const propertyMap = {
  backgroundColor: { 
    black: '#263238',
    white: '#cfd8dc', 
    green: '#a5d6a7', 
    blue: '#0277bd'
  },
  build: { slender, stocky, sporty, skinny},
  pattern: { plain, striped, spotted, patchy },
  size: { small: 100, medium: 140, large: 180, enourmous: 220 }
}

class DragonAvatar extends Component {
  // JS getter method - 3 images'layers (backgroud color, pattern, dragon image) - In react, it turns JSX code
  get DragonImage() {
    const dragonPropertyMap = {};
    this.props.dragon.traits.forEach(trait => {
      const { traitType, traitValue} = trait
      dragonPropertyMap[traitType] = propertyMap[traitType][traitValue];  
    })

    //// destructure
    const { backgroundColor, build, pattern, size } = dragonPropertyMap;

    const sizing = { width: size, height: size };
    console.log(size, backgroundColor)

    return(
      <div className="dragon-avatar-image-wrapper">
        {/* backgroundColor: backgroundColor (key and value name is same so we can just say backgroundColor) */}
        {/* Can't add sizing to style in div so I used size (just number) */}
        <div className="dragon-avatar-image-background" style={{ backgroundColor, width:size, height:size }}></div>
          <img src={pattern} alt="dragon" className="dragon-avatar-image-pattern" style={sizing} />
          <img src={build} alt="dragon" className="dragon-avatar-image" style={sizing}  />
       
      </div>
    );
  }
  render() {
    // destructuring
    const { generationId, dragonId, traits} = this.props.dragon;

    if(!dragonId) return <div></div>

    return(
      <div>
        <span>Generation: {generationId}.</span>
        <span>Dragon: {dragonId}.</span>

        { traits.map(trait => trait.traitValue).join(', ') }
        { this.DragonImage }
      </div>
    )

  }
}

export default DragonAvatar;