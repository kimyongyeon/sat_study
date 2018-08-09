import React, { Component, Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'
import BinClock from './BinClock/BinClock'
import Clock from './Clock/Clock'
import './App.css'
import '../ts/App'


export default class App extends Component {
  render () {

    let name="react처음이야.!"
    let imgAddr="http://newsimg.sedaily.com/2017/10/30/1OMI7CRZT8_1.jpg"
    let style={
      width: "100px",
      height: "100px"
    }
    let fStyle={
      padding: "0px",
      margin: "0px"
    }   
  
  
    return (
      <Fragment>
       
        <h1 className='title'>홈</h1>
        <ul>
            <li><a href="join.html">join.html </a></li>
            <li><a href="profile.html">profile.html </a></li>
            <li><a href="portfolio.md">portfolio.md </a></li>
        </ul>
        <div className="container">
          <div className='header'>
              <div className="header-left">
                <a href='#'>자바스크립트</a>
                <a href='#'> DB학습</a>
              </div>
              <div className="header-right">
                <a href='#'>logout</a>
              </div>
          </div>
          <div className='body'>
            <p>body...</p>
          </div>
          <div className='footer'>
            <p>copyright</p>
          </div>
        </div>
      </Fragment>
    )
  }
}
