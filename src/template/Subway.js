import React, { Component } from 'react' 


class Subway extends Component {
  render () {
    const style = {
      height: '100.00%',
      left: '0.00%',
      objectPosition: '50% 50%',
      top: '0.00%',
      width: '100.00%'
    }
    return (
      <div className="subway-wrapper">
        <img 
          width="720" 
          height="1280" 
          src="https://storage.googleapis.com/makestories-202705.appspot.com/WXCDzGhx27aZ0vzcOpQdjcdDJ873/10.jpg" 
          class="page-background" 
          style={style} alt="fashion bg" />
        <div className="text-container">
          <p className="text-1">Travel like a local</p>
          <p class="text-2">
            SURVIVING
            <br/>THE <br/>SUBWAYS
          </p>
          <div className="divider"/>
          <p className="text-3">Tips for riding subways around the world</p>
          <div className="divider"/>
          <p className="text-4">BY TOKOPEDIA</p>
        </div> 
      </div> 
    )
  }
}

export default Subway