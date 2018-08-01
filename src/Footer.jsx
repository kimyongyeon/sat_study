import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        let style={
            background: '#3498db'
        }
        return (
            <div style={style}>
                <h1>Footer </h1>
                <p>copyright@tonyspark </p>
            </div>
        )
    }
}
