import React, { Component } from 'react'

class TextEditor extends Component {
  handleMouseDown = (e, cmd, showDefaultUI, arg) => {
    e.preventDefault() //Avoids loosing focus from the editable content
    document.execCommand(cmd, showDefaultUI, arg)
  }
  render () {
    return (
      <div className="text-editor">
        <button onMouseDown={(e) => this.handleMouseDown(e, 'italic', false)}>
          Italic
        </button>
        <button onMouseDown={(e) => this.handleMouseDown(e, 'bold', false)}>
          Bold
        </button>
        <button onMouseDown={(e) => this.handleMouseDown(e, 'formatBlock', false, 'h1')}>
          Heading
        </button>
        {/* <button onMouseDown={(e) => this.handleMouseDown()}>
          Underline
        </button> */}
      </div>
    )
  }
}

export default TextEditor