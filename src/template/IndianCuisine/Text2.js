import React, { Component } from 'react'
import ContentEditable from "react-contenteditable"
import { connect } from 'react-redux'

class Text2 extends Component {
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
  text: state.template.indianCuisine.text2
})

export default connect(mapStateToProps,null)(Text2)