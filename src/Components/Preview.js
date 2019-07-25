import React, { Fragment, Component } from 'react'
import Subway from '../template/Subway'
import IndianCuisine from '../template/IndianCuisine'
import ItalianCookbook from '../template/ItalianCookbook'
import { connect } from 'react-redux'

class Preview extends Component {
  constructor(props) {
    super(props)
    this.componentMapping = {
      Subway,
      IndianCuisine,
      ItalianCookbook
    }
  }
  render () {
    const { storiesList=[] } = this.props
    const renderIndicators = []
    const renderStories = storiesList.map((storyName, index) => {
      //console.log(storyName)
      const Component = this.componentMapping[storyName]
      renderIndicators.push ( <li data-value={index} key={index} className={'selected' == index ? 'active' : ''}></li> ) 
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
    return (
      <div className="preview-wrapper">
        <div className="layer-wrapper">
          {renderStories}
          {renderInitialMessage}
        </div>
        <ul onClick={this.handleClick} className="indicators">
          {renderIndicators}
        </ul>
      </div>  
    )
  }
}

const mapStateToProps = (state) => ({
  storiesList: state.stories.storiesList,
})
export default connect(mapStateToProps,null)(Preview)