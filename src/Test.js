import React from 'react'
import ContentEditable from "react-contenteditable";

class Test extends React.Component {
  constructor() {
    super()
    this.state = {
      html: `<p>Hello <b>World</b> !</p><p>Paragraph 2</p>`,
      editable: true
    }
  }

  handleChange = evt => {
    this.setState({ html: evt.target.value });
  }
  toggleEditable = () => {
    this.setState({ editable: !this.state.editable })
  }
  render () {
    console.log(this.state)
    return (
      <div className="test">
        {/* <div setdangerouslyinnerhtml={{__html: this.state.html}} /> */}
        <ContentEditable
          className="editable"
          tagName="pre"
          html={this.state.html} // innerHTML of the editable div
          disabled={!this.state.editable} // use true to disable edition
          onChange={this.handleChange} // handle innerHTML change
          onBlur={this.sanitize}
        />
        <button onClick={this.toggleEditable}>Disable</button>
        {/* <TextEditor /> */}
      </div>
    )
  }
}

export default Test