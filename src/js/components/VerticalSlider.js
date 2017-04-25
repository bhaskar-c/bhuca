import React, { Component } from 'react'
import Slider from 'react-rangeslider'


class VerticalSlider extends Component {
  constructor (props, context) {
    super(props, context)
    this.props = props
    //console.log('label', props.label)
    this.state = {
      value: 50,
    }
  }

  handleChange = (value) => {
    this.setState({
      value: value
    })
  }

  render () {
    const { value, reverseValue } = this.state
    return (
      <div className='slider orientation-reversed'>
        <div className='slider-group'>
          <div className='value'>{value}</div>
          <div className='slider-vertical'>
            <Slider
              min={0}
              max={100}
              value={value}
              orientation='vertical'
              onChange={this.handleChange}
            />
            <div className='slider_label'>{this.props.label}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default VerticalSlider
