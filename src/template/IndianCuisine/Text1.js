import React, { Component } from 'react'
import ContentEditable from "react-contenteditable"
import { connect } from 'react-redux'

class Text1 extends Component {
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

const mapStateToProps = (state) => {
  console.log("state", state.template.indianCuisine.text1)
  return { text: state.template.indianCuisine.text1 }
}

export default connect(mapStateToProps,null)(Text1)

//<p className="text-1">
//      Polabooks Press
//    </p>