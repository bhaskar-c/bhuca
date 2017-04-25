import React from "react"
import ReactDOM from 'react-dom'
import Dropdown from 'react-dropdown'
import VerticalSlider from "./VerticalSlider"
import Keyboard   from "./Keyboard"


export default class SynthUI extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 50};
  }


  _onPatchSelect(event) {
    console.log(this)
  }

  handleChange = (newValue) => {
    this.setState({value: newValue});
  };

  render() {

    const options = [
      'piano', 'violin', 'cello', 'theremin', 'nylon guitar', 'flute', 'clarinet'
    ]
    const defaultOption = options[0]
    return (
      <div id = "synthContainer" class="container-fluid" >
         <div class="row">
            <div class="col-md-1">
                  <canvas is id = "dial1" nx = "dial" label="Threshold" ref = "dial1" > < /canvas>
				            <canvas is id = "dial2" nx = "dial" label="Modulation" ref = "dial2" > < /canvas>
            </div>
            <div class="col-md-3">
                  <Dropdown options={options} onChange={this._onPatchSelect} value={defaultOption } placeholder="Patch Bank" />
                  <canvas is id = "envelope" nx = "envelope" ref = "envelope1" > < /canvas>
              </div>

              <div class="col-md-3">
                    <Dropdown options={options} onChange={this._onPatchSelect} value={defaultOption } placeholder="Beat pattern" />
                    <canvas is id = "matrix" nx = "matrix" ref = "matrix1" > < /canvas>
                </div>
        </div>
        <div class="row">
        <div class="col-md-12 h">
        </div>
        </div>
        <div class="row">
        <div class="col-md-1">
          <VerticalSlider label="Pitch Bend" / >
          </div>
        <div class="col-md-1">
          <VerticalSlider label="Modulation" / >
        </div>
          <div class="col-md-9">
            <Keyboard octaves="6"/>
            </div>
            <div class="col-md-1">
            <VerticalSlider label="Master Vol." / >
            </div>
        </div>
      </div>
    );
  }
}
