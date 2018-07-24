<<<<<<< HEAD
=======
// 나는 충돌난다. 어떻게 할래?
console.log("hello javascript")
>>>>>>> abb164f71a66b7f3e05dab07cfd04f9c6e6ce2e3


console.log("hello javascript")
// 수정해본다.
// 함수 = 객체 
// 1000 -> 1,000
// public, private, protected
// es3 
function Add() {
    // private 
    var getComma = function () {

    }
    // public 
    this.GetComma = function() {}
}
// es5 => class
Add.prototype.add = function() {
    return 1 + 1
}

// list, gallery, custom 
// list > 화면 만들고
// gallery > 화면 만들고 
// show, hide

// 델리게이트 : 대리자에게 기능을 전달한다. 
function cala(a, b, sel) {
    if (sel == "+") { // 모양
        return a + b;
    }
    else if (sel == "-") { // 모양 
        return a - b;
    }
    else if (sel === "/") { // 문자열 + 모양 
        return a / b;
    }
    else if (sel == "*") { // 모양 
        return a * b;
    }
     
}
cala (1, 2, "+");

function isNumberNull(intNum) {
    return intNum || 0;
}

function isStrNull(str) {
    return str || '';
}

function fnClass ({}) {
    a = a || {};
}

function fnNewClass({name:"",phone:123123,addr:""}) {
}

var classname = {
    name: 'kkk',
    phone: 123123123,
    addr: "seoul"
}
fnClass(classname);

fnClass({name:'sdfsdf', phone:123123});
fnClass(name="123123", phone=123123, addr="1312321");

// cookie, webstorage
// string 
JSON.stringify(classname);
JSON.parse(classname);

localStorage.setItem("kkkk", "helll world");

function fnTest(a) {
    a = isNumberNull(a); // 문자열 
    a = isStrNull(a); // str

    a = a || '';
    if (a == "") {

    }
    else if (a == "undefiend") {

    }
    else if (a == "NaN") {

    }
    a = a || '';
    var b = a + 1;
}

function fnTest();

function newCala(a=1, b=0, callback=()=>{}) {
    callback(a, b);
}
newCala(function(i, b) {
    return i + b;
});

newCala(a ,b)
newCala(a, b, c)
function newCala(name) {
    this.argments[0], this.argments[1]
    if(arguments.length == 0) {

    } else {
        
    }
}

function alloc (sel) {
    if ( sel === "1") {
        return pass;
    } else {
        return falil;
    }

}
`<input type="text" value=""> `

Integer.parse("123123")
try {
    i = "234234" * 1
} catch (e) {
    console.log(DynamicsCompressorNode)
}

alloc(1); alloc("1");







let fn = function() {
    console.log("ssss")
}

let fn1 = () => { console.log("12313123")}
let fn2 = (i, i2) => { return i + i2}
let fn3 = i => { return i }

function test (j, k) {
    if (j == 0) {
        k()
    } else {
        k = "";
    }
    return "";
}
test (j, function() {});
test (j, ()=> {})
test (j, (i) => {})
// 동적타이핑 언어 
var num = 1;
var num2 = 2;
var sum = 0;
sum = num + num2; // 12, 3

// scala, kotlin, typescript 
// 하이브리드 : 동적, 정적

// 전역변수
// 지역변수
// jsx => react , coffe script, typescript
function test2() {
    name = ""
}



// es5
var name = ""
let name2 = ""

let line = "" ;
// line += "1231231 \n"
// line += "123123123n"

let multiline = `
sldfjs
dfj
sdfj
sdjf
sdjfsjd
f
`
let a = 1;
let b = 2;
let printme = `
    a + b = ${a + b}
`

let printme2 = "";
printme2 = "a + b" + (a + b) 

let body = "";
for (let i=0; i<10; i++) {
    body += `
    <td>${i}</td>
    <td>2</td>
    <td>3</td>
    <td>4</td>
    <td>5</td>
    `
}
