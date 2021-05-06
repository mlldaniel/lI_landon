import React from 'react';
import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';

import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Main from './components/Main';
class App extends React.Component {
  render() {
    return(
      <div>
        
        <Header/>
        <Main/>

        <Footer/>
        
      </div>
    );
  }
    
}

export default App;
