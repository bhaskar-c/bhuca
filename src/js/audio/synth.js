var synth = {
  audioContext:  new AudioContext(),
  oscillators: {
    osc1: {},
    osc2: {},
    bass: {}
  },

noteOff: function() {
  for (let key in this.oscillators) {
    this.oscillators[key].stop();
  }
},

play: function(note) {
    var pitch = this.notes[note];
    for (let key in this.oscillators) {
      this.oscillators[key] = this.audioContext.createOscillator();
      this.oscillators[key].type = 'sawtooth';
      this.oscillators[key].frequency.value = pitch;
      this.oscillators[key].connect(this.audioContext.destination);
      switch (key) {
        case 'osc1':
          this.oscillators[key].detune.value = -15;
          break;
        case 'osc2':
          this.oscillators[key].detune.value = 15;
          break;
        case 'bass':
          this.oscillators[key].frequency.value = pitch/2;
          this.oscillators[key].type = 'square';
          break;
      }
      this.oscillators[key].start();
    }
},

  notes: {
    C4: 261.63,
    Db4: 277.18,
    D4: 293.66,
    Eb4: 311.13,
    E4: 329.63,
    F4: 349.23,
    Gb4: 369.99,
    G4: 392.00,
    Ab4: 415.30,
    A4: 440.00,
    Bb4: 466.16,
    B4: 493.88
  }
};

export default synth
