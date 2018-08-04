import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        let style={
            background: '#3498db'
        }
        return (
            <div style={style}>
                
                <a class="button">
                 bulma button
                </a>

                <h1>Footer </h1>
                <p>copyright@tonyspark </p>
            </div>
        )
    }
}
