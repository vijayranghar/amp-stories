import React, { Component } from 'react'
import image1 from '../assets/image1.jpeg'
import image2 from '../assets/image2.jpeg'
import image3 from '../assets/image3.jpeg'
import image4 from '../assets/image4.jpeg'
class StoriesList extends Component {
  render () {
    const stories = [
      image1,
      image2,
      image3,
      image4
    ]
    const renderStories = stories.map((item) => (
      <img src={item} alt="story"/>
    ))
    return (
      <div className="stories-list-wrapper">
        {renderStories}
      </div>
    )
  }
}


export default StoriesList