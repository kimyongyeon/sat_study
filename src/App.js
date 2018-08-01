import React, { Component } from 'react'

export default class App extends Component {
  render () {
    let list = [1, 2, 3, 4, 5]
    const LI = []
    for (let i = 0; i < 10; i++) {
      if (list[i] === 1) {
        LI.push(<li>{i}</li>)
      }
    }
    console.log(LI)
    return (
      <div>
                hello world
        <h1>List forever</h1>
        <ul>
          {LI}
        </ul>
      </div>
    )
  }
}
