import { defaultCipherList } from "constants";

function fn1() {
    console.log("void fn1");
}

var fn1 = () => { console.log('void fn1'); }

function fn2(a) {
    return a * 2;
}

var fn2 = a => { return a * 2; }

function fn3(x, y) {
    return x + y;
}

var fn3 = (x ,y) => { return x + y;}

var Item = {
    getName: function() {
        return this.name;
    },
    getName: () => { this.name; }
}