//设置项目源码
fis.set('project.files', []);
fis.set('project.ignore', ['**.js']);

//打包js --BG
  fis.media('jq').match('/components/(jquery/*.js)', {    //jquery
    useCache: false,
    release: 'static/base/$1'
  })
  fis.match('/components/(angular/*.js)', {   //angular
    useCache: false,
    release: 'static/base/$1'
  })
//打包js --END

//打包CSS --BG
  fis.match('/components/(bootstrap/css/*.css)', {   //bootstrap  css
    useCache: false,
    release: 'static/base/$1'
  })
//打包CSS --END

//打包模板
  fis.match('/indexTemp/(*.html)', {   //bootstrap  css
    useCache: false,
    release: 'index$3'
  })