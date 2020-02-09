import React from 'react';
import './App.css';
import text from './cite.json'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: text.frase[0].frase,
      author : text.frase[0].man
    }
    this.changeCit = this.changeCit.bind(this)
  }
  
  changeCit() {
    const index = Math.floor(Math.random() * (+10 - +1)) + +1; 
    this.setState({
      text: text.frase[index].frase,
      author : text.frase[index].man
    })
  }

  render() {
    const colors = ['#2980b9', '#e74c3c', '#8e44ad'];
    let random_color = colors[Math.floor(Math.random() * colors.length)];
    
    const myStyle = {
      color: random_color,
      transitionDuration: 0.4
    }
    const headStyle = {
      backgroundColor: random_color,
    }
    
    return (
      <div className="App">
        <header style={headStyle} className="App-header">
          <h1>My custom script for FreeCodeCamp!</h1>
            <div id="quote-box">
              <h2 className="myText" id="text" style={myStyle}><cite>"{this.state.text}</cite></h2>
              <h5 className="myText" id="author" style={myStyle}>{this.state.author}</h5>
              <a href="tweet"><button style={headStyle} className="new-quote" >Tweet</button></a>
              <button style={headStyle} className="new-quote" onClick={this.changeCit}>Press ME!</button>
             </div>
            <div id="footer">
              <p>Created by Nick</p>
            </div>
        </header>
      </div>
    );
  }
}

export default App;
