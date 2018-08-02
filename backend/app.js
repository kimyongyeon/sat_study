const express = require('express')
const app = express()
const bodyParser = require('body-parser') // body json 사용을 위해 필수!
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// 크로스도메인 때문에... 만약 서비스를 진짜로 한다면 주석처리 요망.
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

////////////////////////////////////
// json 테스트 용도 
////////////////////////////////////
// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })

let memberList = []
let memberInfo = {
    name: '',
    phone: '',
    addr: ''
}

function userAdd () {
    for(var i=0; i<10; i++) {
        memberInfo = {}
        memberInfo.name = "user0" + i;
        memberInfo.phone = "phone0" + i;
        memberInfo.addr = "addr0" + i;
        memberList.push(memberInfo)
    }
}
userAdd();

// 홈
app.get('/', (req, res) => res.send('Hello World!'))
// 목록 
app.get("/list", (req, res) => {
    console.log("list ok")
    res.send({
        name: 'list',
        value: 'tonyspark',
        memberList: memberList
    })
});
// 등록 
app.post("/setMember", (req, res) => {
    let body = req.body
    console.log(body)  
    res.send({
        code: 1,
        msg: 'Ok'
    })
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))