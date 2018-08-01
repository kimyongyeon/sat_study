import React, { Component } from 'react'

export default class BinClock extends Component {
    render() {
        const lines=update()    
        function update() {
            // 현재 시간을 이진 숫자로 변환
            function z2 (v) {
                v=String("00"+v)
                return v.substr(v.length-2, 2)
            }

            function guid() {
                function s4() {
                  return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
                }
                return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
              }
            
            const now=new Date()
            const hh=z2(now.getHours())
            const mm=z2(now.getMinutes())
            const ss=z2(now.getSeconds())
            const binStr=hh+mm+ss
            const style0={color:'brown'}
            const style1={color:'red'}
            const lines=[]

            for (let i=0; i<binStr.length; i++) {
                const v=parseInt(binStr.substr(i, 1))
                const bin="0000"+v.toString(2)
                const bin8=bin.substr(bin.length-4, 4)
                // 이진 숫자를 구성하는 리엑트 객체를 lines 배열에 추가
                for(let j=0; j<bin8.length; j++) {
                    if (bin8.substr(j, 1) === '0') {
                        lines.push(<span key={guid()} style={style0}>0</span>)
                    } else {
                        lines.push(<span key={guid()} style={style1}>1</span>)
                    }
                }
                lines.push(<br />)
            }
            return lines
        }
        
        return (
            <div>
                {lines}
            </div>
        )
    }
}
