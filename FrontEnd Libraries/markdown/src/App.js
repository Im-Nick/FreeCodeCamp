import React from 'react';
import './App.css';
import Markdown from 'react-markdown';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input : PLACEHOLDER 
    }
    this.onChangeText = this.onChangeText.bind(this);
  }

  onChangeText(event) {
    this.setState({
      input : event.target.value
    })
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
	  	        <div class="row">
                <h1>Insert your html code here</h1>
	  		        <div>
	  		    	    <textarea class="editor" onChange={this.onChangeText} value={this.state.input}rows="20" cols="50"></textarea>
	  		        </div>
	  		        <div style={{backgroundColor: "White", color: "black"}}>
                <Markdown
                  source={this.state.input}
                  escapeHtml={false}
                />
	  		        </div>
              </div>
        </header>
      </div>
    );
  }
}

const PLACEHOLDER = '<h1> a header</h1><br><h2>sub header</h2><br><a href="">Link<a/><br><code>a code block</code>';
export default App;
