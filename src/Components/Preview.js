import React, { Fragment, Component } from 'react'
import Subway from '../template/Subway'
import IndianCuisine from '../template/IndianCuisine'
import ItalianCookbook from '../template/ItalianCookbook'
import { connect } from 'react-redux'
import TextEditor from '../Components/TextEditor'

class Preview extends Component {
  constructor(props) {
    super(props)
    this.componentMapping = {
      Subway,
      IndianCuisine,
      ItalianCookbook
    }
    this.state = {
      selectedStory: 0,
    }
  }
  handleClick = e => {
    let value = e.target.getAttribute('data-value')
    if (value !== null) {
      this.setState({ selectedStory: value })
    }
  }
  render () {
    const { storiesList=[] } = this.props
    const { selectedStory } = this.state
    const renderIndicators = []
    const renderStories = storiesList.map((storyName, index) => {
      const Component = this.componentMapping[storyName]
      renderIndicators.push ( <li data-value={index} key={index} className={selectedStory == index ? 'active' : ''}></li> ) 
      if(Component) {
        return (
          <Fragment key={index}>
            <Component />
          </Fragment>
        )
      }
      return null
    })
    const renderInitialMessage = renderStories.length < 1 ? (
      <div className="initial-message">
        <h2>Add a story to start!</h2>
      </div>
    ) : null
    const style = selectedStory >= 1 ? { transform: `translateX(-${selectedStory * 360}px)` } : {}
    return (
      <div className="preview-wrapper">
        <TextEditor />
        <div className="preview-window">
          <div className="preview">
            <div className="layer-wrapper" style={style}>
              {renderStories}
              {renderInitialMessage}
            </div>
          </div>
          <ul onClick={this.handleClick} className="indicators">
            {renderIndicators}
          </ul>  
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  storiesList: state.stories.storiesList,
})
export default connect(mapStateToProps,null)(Preview)