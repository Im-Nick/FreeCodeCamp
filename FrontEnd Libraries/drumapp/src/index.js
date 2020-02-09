import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

const bank = {
    keys : [{
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Chord Q',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  }, {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Chord W',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  }, {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Chord E',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  }, {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Shaker A',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  }, {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Open-HH S',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  }, {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Closed-HH D',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  }, {
      keyCode: 90,
      keyTrigger: 'Z',
      id: 'Punchy-Kick Z',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  }, {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Side-Stick X',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  }, {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Snare C',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }]
}
const keyArr = () => {
    let arr = [];
    bank.keys.forEach(data => {
        arr.push(data.keyCode)
    })
    return arr;
}

ReactDOM.render(<App  bank={bank} keysArr={keyArr()}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
