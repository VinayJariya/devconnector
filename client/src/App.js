import React from 'react';

import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Footer from './components/layout/Footer'
import './App.css';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Navbar></Navbar>
        <Landing></Landing>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
