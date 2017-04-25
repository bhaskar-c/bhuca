import React, { Component } from 'react'
import synth from './../audio/synth'
//import {synth} from './../audio/synth'
//import {myMember} from 'my-module';

class Key extends Component {

  constructor(props) {
    super(props)
    this.props = props
  }

  playNote() {
    console.log(synth)
    synth.play(this.props.note)

  }
  stopNote(){
    synth.noteOff();
  }
  render(){
    return (
      <div className={this.props.color}
        id={this.props.note}
        onMouseDown={this.playNote.bind(this)}
        onMouseUp={this.stopNote}
        onMouseLeave={this.stopNote}>
      </div>
    );
  }

}

export default Key
