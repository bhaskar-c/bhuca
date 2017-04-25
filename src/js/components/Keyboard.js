import React, { Component } from 'react'
import Key from './Key'


var keyboardStyle = {
  height: 240,
  margin: "auto",
  overflow: "hidden",
  background: "linear-gradient(#1e1d1d, #000)"
};



class Keyboard extends Component {

  constructor(props) {
    super(props);
    this.octaves = props.octaves
  }
  render(){
    var indents = []
    let keyWidth = 14.28/this.props.octaves
      for (var i = 1; i <= this.props.octaves; i++) {
          indents.push(
            <span>
            <li style={{width: keyWidth + '%'}}>
              <Key color="key_white" note={ 'C' + i} />
              <Key color="key_black" note= {'Db' + i } />
            </li>
            <li style={{width: keyWidth + '%'}}>
              <Key color="key_white" note= { 'D' + i} />
              <Key color="key_black" note={'Eb'} />
            </li>
            <li style={{width: keyWidth + '%'}}>
              <Key color="key_white" note={'E'+i} />
            </li>
            <li style={{width: keyWidth + '%'}}>
              <Key color="key_white" note={'F'+i} />
              <Key color="key_black" note={'Gb'+i} />
            </li>
            <li style={{width: keyWidth + '%'}}>
              <Key color="key_white" note={'G'+i} />
              <Key color="key_black" note={'Ab'+i} />
            </li>
            <li style={{width: keyWidth + '%'}}>
              <Key color="key_white" note={'A'+i} />
              <Key color="key_black" note={'Bb'+i} />
            </li>
            <li style={{width: keyWidth + '%'}}>
              <Key color="key_white" note={'B'+i} />
            </li>
            </span>
          );
        }

    return(
      <div style={keyboardStyle}>
        <div id="keyboard-container">
          {indents}

      </div>
    </div>
    );
  }
}

//React.render(<Keyboard/>, document.getElementById('js303')	);

export default Keyboard
