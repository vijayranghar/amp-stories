import React, { Component } from 'react'
import { SketchPicker } from 'react-color';
class TextEditor extends Component {
  constructor() {
    super()
    this.state = {
      showColorPicker: false,
    }
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
        property: 'foreColor',
        icon: 'fa-eyedropper',
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
  showColorPicker = () => {
    this.setState({
      showColorPicker: true
    })
  }
  hideColorPicker = () => {
    this.setState({
      showColorPicker: false
    })
  }
  handleColorPickerChange = (color) => {
    console.log(color)
    const { rgb:{r,g,b,a} } = color 
    document.execCommand('styleWithCSS', false, true);
    document.execCommand('foreColor', false, `rgba(${r},${g},${b},${a})`);
  }
  render () {
    const { showColorPicker } = this.state 
    const renderColorPicker = showColorPicker ? (
      <div className="color-picker">
        <SketchPicker onChangeComplete={this.hideColorPicker} onChange={this.handleColorPickerChange} /> 
      </div>
    )
    : null
    const renderControls = this.editorControls.map(({ icon, property }, index) => {
      if(property==='foreColor') {
        return (
          <button onMouseDown={this.showColorPicker} key={index}>
            <i className={`fa ${icon}`} aria-hidden="true"></i>
            {renderColorPicker}
          </button>
        )
      }
      return (
        <button key={index} onMouseDown={(e) => this.handleMouseDown(e, property, false)}>
          <i className={`fa ${icon}`} aria-hidden="true"></i>
        </button>
      )
    })

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
        {/* <SketchPicker /> */}
      </div>
    )
  }
}

export default TextEditor