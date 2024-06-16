import React from 'react';
import { Component } from 'react';
import Weather from './weather'
import  './App.css';

class App extends Component{
  state={theme:false}

  toggleTheme = (event) => {
    this.setState({ theme: !this.state.theme });
    console.log(this.state);
  }
  
  render(){
    const {theme}=this.state
    const themeClass = this.state.theme ? 'light-theme' : 'dark-theme';
    const buttonText = this.state.theme ? 'Change to Dark Theme' : 'Change to Light Theme'; 
    const buttonClass=this.state.theme ? 'but':'but2'


    return (
      <div className={themeClass}>
        <button type='button' onClick={this.toggleTheme} className={buttonClass}>
          {buttonText}
        </button>
        <h1 className='h'>Weather Forecast App</h1>
        <Weather />
      </div>
    );

  }
}


export default App;