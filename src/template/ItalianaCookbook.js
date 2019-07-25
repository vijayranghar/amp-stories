import React, { Component } from 'react' 

class ItalinaCookbook extends Component {
  render () {
    return (
      <div className="italiana-cookbook-wrapper">
        <img 
          className="illhsgwbfv element ui-draggable-handle" 
          width="720" 
          height="1280" 
          src="https://storage.googleapis.com/makestories-202705.appspot.com/WXCDzGhx27aZ0vzcOpQdjcdDJ873/pablo-merchan-montes-772134-unsplash.jpg" 
          alt="italiana-cookbook-wrapper"
        />
        <div className="text-container">
          <p className="text-1">
            World cuisine
          </p>
          <p className="text-2">
            Italiana cookbook
          </p>
          <div className="divider" />
          <p className="text-3">
            classic recipies for every home cook
          </p>
        </div>
      </div> 
    )
  }
}

export default ItalinaCookbook