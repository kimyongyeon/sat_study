var home = {
    init: function () {
        console.log("init");

        this.model.name="tonyspark";
        this.model.phone="010-1234-1234";
        this.model.addr="서울시 상도동";

        console.log("객체: " + this.model); // => localStorage에 저장은 되나 read 해석 불가능.
        console.log("문자열: " + JSON.stringify(this.model)); // => localStorage에 저장도 되고 해석도 가능.

        // 사파리에서는 file:// 접근시 둘다 저장이 안된다. 그럼 node-server로 띄우면 될까?
        localStorage.setItem("model", this.model); 
        localStorage.setItem("realModel", JSON.stringify(this.model));
        
        console.log("data read called");
        var model = localStorage.getItem("realModel");
        console.log("readModel: " + model);

        console.log("결정적인 변화... 어떻게 줘야 하는가....");
        console.log("end");

    },
    event: function() {
        console.log("event init");
    },
    controller: function() {
        console.log("controller init");
    },
    model: {
        name: '',
        phone: '',
        addr: ''
    },
    destroy: function() {
        var d = new Date();
        var n = d.getMilliseconds();
        console.log(n);

        var result = Math.floor(Math.random() * 1000000) + 1;
        console.log(result);
        $("#srcIndex").attr("src", $("#srcIndex").attr("src") + result);
    }
}

// window.fnHome = home;