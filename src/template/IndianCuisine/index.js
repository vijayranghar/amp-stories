import React, { Component } from 'react' 
import TextEditor from '../../Components/TextEditor'
import Text1 from './Text1'
import Text2 from './Text2'
import Text3 from './Text3'
import Text4 from './Text4'
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
          <Text2 />
          <Text3 />
          <Text4 />
        </div>
        <TextEditor />
      </div>
    )
  }
}

export default IndianCuisine