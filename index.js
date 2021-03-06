var home = {
  init: function () {
    console.log('init')

    this.model.name = 'tonyspark'
    this.model.phone = '010-1234-1234'
    this.model.addr = '서울시 상도동'

    console.log('객체: ' + this.model) // => localStorage에 저장은 되나 read 해석 불가능.
    console.log('문자열: ' + JSON.stringify(this.model)) // => localStorage에 저장도 되고 해석도 가능.

    // 사파리에서는 file:// 접근시 둘다 저장이 안된다. 그럼 node-server로 띄우면 될까?
    localStorage.setItem('model', this.model)
    localStorage.setItem('realModel', JSON.stringify(this.model))

    console.log('data read called')
    var model = localStorage.getItem('realModel')
    console.log('readModel: ' + model)

    this.event.insert()
    this.event.update()
    this.event.delete()

    console.log(this)

    var list = this.model.dumyList()
    console.log(list)

    this.ajax.list();

    console.log('결정적인 변화... 어떻게 줘야 하는가....')
    console.log('end')
  },
  ajax: {
    list: function() {
      $.ajax({
        url: "http://127.0.0.1:3000/list",
      beforeSend: function( xhr ) {
          xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
      }})
      .done(function( data ) {
          if ( console && console.log ) {
              console.log(data);
              // $("body").html(data);
          }
      });
    },
    reg: function() {},
    edit: function() {},
    remove: function() {}
  },  
  uiDraw: function () {
    console.log('ui Draw called')
  },
  event: {
    insert: function () {
      console.log('입력')
    },
    update: function () {
      console.log('수정')
    },
    delete: function () {
      console.log('삭제')
    }

  },
  controller: function () {
    console.log('controller init')
  },
  model: {
    name: '',
    phone: '',
    addr: '',
    dumyList: function () {
      console.log(this)
      var list = []
      for (var i = 0; i < 10; i++) {
        var nModel = {
          name: 't' + i,
          phone: 'p' + i,
          addr: 'a' + i
        }
        list.push(nModel)
        // this.name="t"+i;
        // this.phone="p"+i;
        // this.addr="a"+i;
        // list.push(this);
      }
      return list
    }
  },
  destroy: function () {
    var d = new Date()
    var n = d.getMilliseconds()
    console.log(n)

    var result = Math.floor(Math.random() * 1000000) + 1
    console.log(result)
    $('#srcIndex').attr('src', $('#srcIndex').attr('src') + result)
  }
}
window.fnHome = home;
