import React, { Component, Fragment } from 'react'

export default class Clock extends Component {
    render() {
        let elem=update()
        function update() {
            const d=new Date()
            // const hour=d.getHours()
            // const min=d.getMinutes()
            // const sec=d.getSeconds()
            // const elem=<div>
            //     {hour}:{min}:{sec}
            //     </div>
        
            // es2015: 분할대입 
            const [hour, min, sec] = [
                d.getHours(),
                d.getMinutes(),
                d.getSeconds()
            ]
            // 화살표 함수 
            const z2= (v) => {
                const s="00"+v
                return s.substr(s.length-2, 2)
            }

            return (<div>{z2(hour)}:{z2(min)}:{z2(sec)}</div>)
        }
        return (
            <Fragment>
                {elem}    
            </Fragment>
        )
    }
}
