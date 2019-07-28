import React, { Component } from 'react'

class TextEditor extends Component {
  constructor() {
    super()
    this.editorControls = [
      {
        property: 'undo',
        icon: 'fa-undo',
        args: ''
      },
      {
        property: 'redo',
        icon: 'fa-repeat',
        args: ''
      },
      {
        property: 'italic',
        icon: 'fa-italic',
        args: ''
      },
      {
        property: 'bold',
        icon: 'fa-bold',
        args: ''
      },
      {
        property: 'underline',
        icon: 'fa-underline',
        args: ''
      },
      {
        property: 'justifyCenter',
        icon: 'fa-align-center',
        args: '',
        desc: 'Centers the selection or insertion point.',
      },
      {
        property: 'justifyFull',
        icon: 'fa-align-justify',
        args: '',
        desc: 'Justifies the selection or insertion point.',
      },
      {
        property: 'justifyLeft',
        icon: 'fa-align-left',
        args: '',
        desc: 'Justifies the selection or insertion point to the left.',
      },
      {
        property: 'justifyRight',
        icon: 'fa-align-right',
        args: '',
        desc: 'Right-justifies the selection or the insertion point.'
      },
      // {
      //   label: 'Heading',
      //   property: 'heading',
      //   icon: '',
      //   args: ''
      // },
    ]
  }
  handleMouseDown = (e, cmd, showDefaultUI, arg) => {
    e.preventDefault() //Avoids loosing focus from the editable content
    document.execCommand(cmd, showDefaultUI, arg)
  }
  render () {
    const renderControls = this.editorControls.map(({ icon, label,property }) => (
      <button onMouseDown={(e) => this.handleMouseDown(e, property, false)}>
        <i className={`fa ${icon}`} aria-hidden="true"></i>
      </button>
    ))

    return (
      <div className="text-editor">
        {renderControls}
        {/* <button onMouseDown={(e) => this.handleMouseDown(e, 'italic', false)}>
          Italic
        </button>
        <button onMouseDown={(e) => this.handleMouseDown(e, 'bold', false)}>
          Bold
        </button>
        <button onMouseDown={(e) => this.handleMouseDown(e, 'formatBlock', false, 'h1')}>
          Heading
        </button> */}
        {/* <button onMouseDown={(e) => this.handleMouseDown()}>
          Underline
        </button> */}
      </div>
    )
  }
}

export default TextEditor