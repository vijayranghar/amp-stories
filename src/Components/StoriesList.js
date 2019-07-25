import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectStory } from '../actions'
import image1Url from '../assets/image1.jpeg'
import image2Url from '../assets/image2.jpeg'
import image3Url from '../assets/image3.jpeg'
import image4Url from '../assets/image4.jpeg'
class StoriesList extends Component {
  handleClick = (storyId) => {
    this.props.selectStory(storyId)
  }
  render () {
    const stories = [{
      imageUrl: image1Url,
      name: 'Fashion',
    },
    {
      imageUrl: image2Url,
      name: 'Subway',
    },
    {
      imageUrl: image3Url,
      name: 'IndianCuisine'
    },
    {
      imageUrl: image4Url,
      name: 'Classics'
    }]

    const renderStories = stories.map(({ imageUrl, name }, index) => (
      <div className="story-image" key={index} onClick={(e) => this.handleClick(name)}>
        <span className="fa fa-plus img-delete-btn add-template"/>
        <img src={imageUrl} alt="story"/>
      </div>
    ))
    return (
      <div className="stories-list-wrapper">
        {renderStories}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  selectStory: id => { dispatch(selectStory(id))}
})

export default connect(null, mapDispatchToProps)(StoriesList)