//引入模板
var tplIndex = require('../templates/index.string');

//定义视图
SPA.defineView('index', {

  //装载html模板
  html: tplIndex,

  //载入插件列表
  //delegated 实现tab事件的绑定
  plugins: ['delegated'],

  //初始化一些属性和方法
  init: {
    setFocus: function (e) {
      $(e.el).addClass('active').siblings().removeClass('active');
    }
  },

  //定义子视图
  modules: [{
    name: 'content', // 子视图的名字，用作后边引用的句柄
    views: ['home','my','dingdan'], // 定义子视图的列表数组
    defaultTag: 'home', // 定义默认视图
    container: '.l-container' // 子视图的容器
  }],

  //绑定tab事件
  bindActions: {
    'switch.tabs': function (e,data) {
      //是指当前tab高亮
      this.setFocus(e);

      //切换子视图
      this.modules.content.launch(data.tag);
    }
  },

  //绑定视图的事件
  bindEvents: {
    show: function () {

    }
  }
});
