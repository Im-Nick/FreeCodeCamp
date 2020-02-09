import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      keysArr: this.props.keysArr,
      index : 0
    }
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

    // KeyBoard Press
  handleKeyPress(e) {
    if (this.state.keysArr.indexOf(e.keyCode) < 0) return;
    this.setSong(e.keyCode) 
    this.playAudio();
  }


  // Button Click
  handleClick(e) {
    if (this.state.keysArr.indexOf(parseInt(e.target.value)) < 0) console.log("buh");
    this.setSong(parseInt(e.target.value)) 
    this.playAudio();
  }


  // Get index,url and keyID
  setSong(key) {
    this.props.bank.keys.forEach((data,index) => {
      if (key === data.keyCode) {
          this.setState({
            index: index,
            songUrl: data.url,
            keyID: data.keyCode,
            id: data.id
        });
      }
    }) 
  }

  
  // Play Songs
  playAudio() {
    setTimeout(() => {
      let audio = new Audio(this.state.songUrl)
      audio.play()
    },1)
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>FreeCode Camp</h1>
        <div className="btn-group">
          <button value='81' onClick={this.handleClick} className="button">Q</button>
          <button value='87' onClick={this.handleClick} className="button">W</button>
          <button value='69' onClick={this.handleClick} className="button">E</button>
        </div>
        <div className="btn-group">
          <button value='65' onClick={this.handleClick} className="button">A</button>
          <button value='83' onClick={this.handleClick} className="button">S</button>
          <button value='68' onClick={this.handleClick} className="button">D</button>
        </div>
        <div className="btn-group">
          <button value='90' onClick={this.handleClick} className="button">Z</button>
          <button value='88' onClick={this.handleClick} className="button">X</button>
          <button value='67' onClick={this.handleClick} className="button">C</button>
        </div>
        <div style={{paddingTop: "1em"}}>{this.state.id}
        </div>
        </header>
      </div>
    );
  }
}

export default App;
