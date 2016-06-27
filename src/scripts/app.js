// 引入类库
require('./lib/spa.min.js');
require('./lib/iscroll-probe.js');
require('./lib/swiper-3.3.1.min.js');
require('./lib/swiper.animate1.0.2.min.js');

// 引入views
require('./views/guide.js');
require('./views/dingdan.js');
require('./views/my.js');
require('./views/index.js');
require('./views/home.js');

//SPA设置
SPA.config({
  indexView: 'guide'
});
