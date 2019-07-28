import React, { Component } from 'react' 
import Text1 from './Text1'

class IndianCuisine extends Component {
  render () {
    const imageStyle = {
      height: '100%',
      left: '0%',
      objectPosition: '50% 50%',
      top: '0%',
      width: '100%',
      objectFit: 'cover',
    }
    return (
      <div className="indian-cuisine-wrapper story">
        <img 
          width="720" 
          height="1280" 
          id="tpuxiqczej" 
          src="https://storage.googleapis.com/makestories-202705.appspot.com/WXCDzGhx27aZ0vzcOpQdjcdDJ873/rizky-subagja-748276-unsplash.jpg" 
          className="page-background" 
          style={imageStyle} alt="indian cuisine" 
        />
        <div className="text-container">
          <Text1 />
          <p className="text-2">
            THE CUISINE: INDIAN
          </p>
          <p className="text-3">
            IMPORTANT TIPS AND MOUTH-WATERING RECIPES
          </p>
          <p className="text-4">
            RUFUS PALMERSTON
          </p>
        </div>
      </div>
    )
  }
}

export default IndianCuisine