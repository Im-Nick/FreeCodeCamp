import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      primaryInput: '',
      secondaryInput: '',
      primaryNumber: '',
      lastOperator: '',
      prepareOperator: '',
      result: 0
    }

    // Prepare func
    this.onlyNumber = this.onlyNumber.bind(this);
    this.onlyOperators = this.onlyOperators.bind(this);
    this.clearAll = this.clearAll.bind(this);
    this.printResult = this.printResult.bind(this);
  }


  // Func that get Only Numbers
  onlyNumber(e) {
    // If is operator remove it from primary and move to secondary
    if ((/[*-/+]/).test(this.state.primaryInput)) {
      this.setState({
        secondaryInput: this.state.secondaryInput + this.state.primaryInput,
        primaryInput: '' + e.target.value
      })
    }else{
      this.setState({
        primaryInput: this.state.primaryInput + e.target.value
      })
    }
  }


  // Func for Operators
    onlyOperators(e) {
      if (!(/[*-/+]/).test(e.target.value)) return;

      // If is an operator don't push the value to the secondary but get ready
      if ((/[*-/+]/).test(this.state.primaryInput)) {
        this.setState({primaryInput: e.target.value});
      }else{
        if (this.state.secondaryInput === "") {
          this.setState({
            primaryNumber: this.state.primaryInput,
            lastOperator: e.target.value
          })
        }else{
          let output = "";
          let primary = parseInt(this.state.primaryNumber)
          let secondary = parseInt(this.state.primaryInput)
          
          if (this.state.lastOperator === '+') output = ( primary + secondary);
          if (this.state.lastOperator === '-') output = ( primary - secondary);
          if (this.state.lastOperator === '/') output = ( primary / secondary);
          if (this.state.lastOperator === '*') output = ( primary * secondary);

          this.setState({
            primaryNumber: output,
            lastOperator: e.target.value
          })
        }
        this.setState({
          secondaryInput: this.state.secondaryInput + this.state.primaryInput,
          primaryInput: e.target.value
      })
    }
  }

  // Func for print the result
  printResult() {
    let preResult = this.state.secondaryInput + this.state.primaryInput
    let primary = parseInt(this.state.primaryNumber)
    let secondary = parseInt(this.state.primaryInput)
    let output;
    
    if (this.state.lastOperator === '+') output = ( primary + secondary);
    if (this.state.lastOperator === '-') output = ( primary - secondary);
    if (this.state.lastOperator === '/') output = ( primary / secondary);
    if (this.state.lastOperator === '*') output = ( primary * secondary);

    this.setState({
      primaryInput: '' + output,
      secondaryInput: preResult
    })
  }


  // Func for clear all
  clearAll() {
    this.setState({
      primaryInput: '',
      secondaryInput: '',
      primaryNumber: '',
      lastOperator: ''
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div className="calculator-box">
          <input className="secondary-input" type="text" value={this.state.secondaryInput} disabled></input>
          <input className="primary-input" type="text" value={this.state.primaryInput} disabled></input>
          <h5>Calculator by Nick</h5>
          <Buttons 
            number={this.onlyNumber}
            operator={this.onlyOperators}
            clear={this.clearAll}
            result={this.printResult}
          />
          <br />
          </div>
        </header>
      </div>
    );
  }
}

class Buttons extends React.Component { 
  render() {
    return (
      <div className="calculator-buttons">
        <button onClick={this.props.clear} className="button clear">C</button>
        <button onClick={this.props.operator} className="button" value="/">/</button>
        <button onClick={this.props.number} className="button" value="7">7</button>
        <button onClick={this.props.number} className="button" value="8">8</button>
        <button onClick={this.props.number} className="button" value="9">9</button>
        <button onClick={this.props.operator} className="button" value="*">*</button>
        <button onClick={this.props.number} className="button" value="4" >4</button>
        <button onClick={this.props.number} className="button" value="5" >5</button>
        <button onClick={this.props.number} className="button" value="6">6</button>
        <button onClick={this.props.operator} className="button" value="-">-</button>
        <button onClick={this.props.number} className="button" value="1">1</button>
        <button onClick={this.props.number} className="button" value="2">2</button>
        <button onClick={this.props.number} className="button" value="3">3</button>
        <button onClick={this.props.operator} className="button" value="+">+</button>
        <button onClick={this.props.number} className="button zero" value="0">0</button>
        <button onClick={this.props.result} className="button equal" value="=">=</button>
      </div>
    );
  }
}


export default App;
