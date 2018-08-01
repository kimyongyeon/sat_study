import React, { Component, Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'
import BinClock from './BinClock/BinClock'
import Clock from './Clock/Clock'

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
        <Header />
        <h1>react 공부하기.</h1>
        <BinClock />
        <Clock />
        <p>{this.props.elem}</p>
        <ul>
          <li>리엑트환경설정 {name}</li>
          <li>리엑트문법 <img style={style} src={imgAddr} alt='이미지입니다.'/></li>
          <li>리엑트-프로젝트실전</li>
        </ul>
        <Footer />
      </Fragment>
    )
  }
}
