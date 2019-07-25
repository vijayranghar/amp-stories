import React, { Component } from 'react'
import Subway from '../template/Subway'
import IndianCuisine from '../template/IndianCuisine'
import ItalianaCookbook from '../template/ItalianaCookbook'
class Preview extends Component {
  render () {
    return (
      <div className="preview-wrapper">
        <div className="layer">
          {/* <Subway /> */}
          {/* <IndianCuisine /> */}
          <ItalianaCookbook />
        </div>
      </div>
    )
  }
}

export default Preview