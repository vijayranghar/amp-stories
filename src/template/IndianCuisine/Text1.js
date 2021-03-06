import React, { Component } from 'react'
import ContentEditable from "react-contenteditable"
import { connect } from 'react-redux'
import { editText } from '../../actions'
class Text1 extends Component {
  handleChange = evt => {
    this.props.editText({template: 'indianCuisine', field: 'text1', value: evt.target.value})
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

const mapStateToProps = ({template}) => ({
  text: template.indianCuisine.text1,
})


export default connect(mapStateToProps, { editText })(Text1)
