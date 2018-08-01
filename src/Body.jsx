import React, { Component } from 'react'

export default class Body extends Component {
    render() {
        return (
            <div>
                <pre>
                    가상DOM ? 
                    가상 DOM은 DOM의 상태를 메모리 위에 계속 올려두고, DOM에 변경이 있을 때만 해당 변경을 
                    반영 합니다. 
                    DOM을 변경할 때 따로 특수한 메서드가 필요하지 않습니다. 
                    지금까지 본 것과 마찬가지로 ReactDOM.render() 메서드를 사용하면 됩니다.

                </pre>
            </div>
        )
    }
}
