import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        let style={
            background: '#3498db'
        }
        return (
            <div style={style}>
                <h1>토니스파크 홈페이지 Header</h1>
                <p>안녕하세요. 토니스파크 입니다. 반갑습니다. </p>
            </div>
        )
    }
}
