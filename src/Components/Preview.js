import React, { Component } from 'react'
import Subway from '../template/Subway'
class Preview extends Component {
  render () {
    return (
      <div className="preview-wrapper">
        <div className="layer">
          <Subway />
        </div>
      </div>
    )
  }
}

export default Preview