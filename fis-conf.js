//fis.set('project.ignore', [    //  match 匹配的内容也不会被发布
//  'components/**',
//  '*',              //单个文件不发布
//]);


//框架基本js css打包路径
fis.set('frame','/static/base');
fis.match("**",{  //默认没规则没匹配到文件不发布
  release : false
})
//打包js --BG
  fis.match('/components/(jquery/*.js)', {    //jquery
    release: '${frame}/$1'
  })
      .match('/components/(angular/*.js)', {               //angular
    release: '${frame}/$1'
  })
//打包js --END

//打包CSS --BG
  fis.match('/components/(bootstrap/css/*.css)', {     //bootstrap  css
    release: '${frame}/$1'
  })
//打包CSS --END

//打包模板
  fis.match('/indexTemp/(*.html)', {  //html特性  会引入页面css,js依赖
    isJsLike: true,    //如果当做JS来处理 就不会自动导入页面上的 css js依赖
    release: 'index$3'
  })