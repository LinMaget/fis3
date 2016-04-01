//设置项目源码
fis.set('project.ignore', [
  'components/**',
  '*',              //单个文件不发布
]);
//框架基本js css打包路径
fis.set('frame','/static/base');


//打包js --BG
  fis.media('jq').match('/components/(jquery/*.js)', {    //jquery
    release: '${frame}/$1'
  })
  fis.match('/components/(angular/*.js)', {               //angular
    release: '${frame}/$1'
  })
//打包js --END

//打包CSS --BG
  fis.match('/components/(bootstrap/css/*.css)', {     //bootstrap  css
    release: '${frame}/$1'
  })
//打包CSS --END

//打包模板
  fis.match('/indexTemp/(*.html)', {   //bootstrap  css
    useCache: false,
    release: 'index$3'
  })