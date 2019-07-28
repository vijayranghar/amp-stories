import React, { Component } from 'react'
import ContentEditable from "react-contenteditable"
import { connect } from 'react-redux'

class Text4 extends Component {
  componentWillMount() {

  }
  handleChange = evt => {
    this.setState({ html: evt.target.value });
  }
  toggleEditable = () => {
    this.setState({ editable: !this.state.editable })
  }
  render () {
    return (
      <>
        <ContentEditable
          className="editable"
          tagName="pre"
          html={this.props.text} // innerHTML of the editable div
          onChange={this.handleChange} // handle innerHTML change
          onBlur={this.sanitize}
        />
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  text: state.template.indianCuisine.text4,
})

export default connect(mapStateToProps,null)(Text4)

//<p className="text-1">
//      Polabooks Press
//    </p>