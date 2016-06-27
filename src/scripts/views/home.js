var tplHome = require('../templates/home.string');

SPA.defineView('home',{
  html: tplHome,

  plugins: ['delegated', {
    name: 'avalon',
    options: function (vm) {
      vm.teacherslist = [];
    }
  }],

  bindEvents: {
    'beforeShow': function () {
      //获得vm对象
      var vm = this.getVM();

      $.ajax({
        // url: '/E-YOGA/mock/teacherslist.json',
        url: '/api/getTeacherlist.php',
        type: 'get',
        data:{
          rtype: 'refresh'
        },
        success: function (rs) {
          vm.teacherslist = rs.data;
        }
      });
    },

    'show': function () {
      var fixScroll = this.widgets.fixScroll;
      fixScroll.on('scroll', function () {
        if(this.y <= -70) {
          if($('.m-home').siblings().length > 0){
          } else {
            $('.m-home').after($('.teachers').clone(true).addClass('fixed'));
          }
        } else {
          $('.teachers.fixed').remove();
        }
      });
    }
  }
});
