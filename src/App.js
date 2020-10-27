import './styles/App.css'

import React, {Component} from 'react'
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Profile from "./components/Profile"

//When class, function use render react creates new tag that you can use in your program
class App extends React.Component {
    render() {
      return (
         <div className='app-wrapper'>
             <Header />
             <Navbar />
             <Profile />
         </div>
      )
  }
}

export default App;
