import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      minutes: 25,
      seconds: '0' + 0,
      break: 0,
      active: false
    }
    
    // Setup functions
    this.setTime = this.setTime.bind(this);
    this.setupTimer = this.setupTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.timer = this.timer.bind(this);
    this.setBreak = this.setBreak.bind(this)
    this.reset = this.reset.bind(this)
  } 


  // Change Break
  setBreak(event) {
    if (event.target.value === "up" && this.state.break >= 0) this.setState({break: this.state.break + 1})
    if (event.target.value === "down" && this.state.break > 0) this.setState({break: this.state.break - 1})
  }

  // Change minutes
  setTime(event) {
    if (event.target.value === "up" && this.state.minutes >= 0) this.setState({minutes: this.state.minutes + 1})
    if (event.target.value === "down" && this.state.minutes > 0) this.setState({minutes: this.state.minutes - 1})
  }


  // Setup Timer
  setupTimer() {
    if (this.state.seconds === "00") this.setState({seconds: 0})
    if (this.state.active === true) return;
    if (this.state.minutes === 0 && this.state.seconds == 0) {alert ("Can't do it!"); return};
    this.setState({
      active: true
    })
    
    setTimeout(() => {
      this.timer();
    },1)
  }
  
  reset() {
    this.setState({
      minutes: 24,
      seconds: 59,
      break: 0,
      active: false
    })
  }

  // Timer Start
  timer() {
    if (this.state.seconds === 0) {

      setInterval(() => {
        if (this.state.minutes === "00" && this.state.seconds == "00") {alert ("Finish!"); this.reset(); return};
        if (this.state.active === false) return;
        if (this.state.seconds <= 0) { 
        (this.state.minutes < 11 && this.state.minutes > 0) 
        ? this.setState({minutes : '0' + (this.state.minutes - 1),seconds : 60})
        : this.setState({minutes : (this.state.minutes - 1),seconds : 60}); 
        };

        if (this.state.seconds < 11 && this.state.seconds > 0) { 
          this.setState(prev => ({seconds: '0' + (prev.seconds - 1)}));
        }else{
          this.setState(prev => ({seconds: prev.seconds - 1}));
        }
      },1000);

      setTimeout(() => {
        if (this.state.active === false) return;
        if (this.state.break === 0) return;
        alert("Time out!")
        this.setState({
          minutes: this.state.minutes + this.state.break
        })
      },(this.state.break * 60) * 1000);
    }
  }

  // Func for stop timer
  stopTimer() {
    this.setState({
      active: false
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Pomodoro Clock</h1>
        <div className="wrapper">
          
          <div className="box clock">
            <h1 style={{fontSize: "36px"}}>Pomodoro Clock</h1>
          </div>

          <div className="box timer">
            <h1 style={{fontSize: "24px"}}>Timer</h1>
              <h2>{this.state.minutes}:{this.state.seconds}</h2>
              <h3 style={{fontSize: "24px"}}>Break</h3>
              <h3>{this.state.break}</h3>
            </div>

          <div className="box break">
          <h1 style={{fontSize: "24px"}}>Break Lenght (1 Min)</h1>
            <button onClick={this.setBreak} value="up" className="fa fa-arrow-up mybtn"></button>
            <button onClick={this.setBreak} value="down" className="fa fa-arrow-down mybtn"></button>
          </div>

          <div className="box session">
            <h1 style={{fontSize: "24px"}}>Session Lenght</h1>
            <button onClick={this.setTime} value="up" className="fa fa-arrow-up mybtn"></button>
            <button onClick={this.setTime} value="down" className="fa fa-arrow-down mybtn"></button>
          </div>

          <div className="box play">
            <button onClick={this.setupTimer} className="fa fa-play mybtn play"></button>
          </div>

          <div className="box pause">
            <button onClick={this.stopTimer} className="fa fa-pause mybtn pause"></button>
          </div>

          </div>
        </header>
      </div>
    );
  }
}

export default App;
