//������ĿԴ��
fis.set('project.files', []);
fis.set('project.ignore', ['**.js']);

//���js --BG
  fis.media('jq').match('/components/(jquery/*.js)', {    //jquery
    useCache: false,
    release: 'static/base/$1'
  })
  fis.match('/components/(angular/*.js)', {   //angular
    useCache: false,
    release: 'static/base/$1'
  })
//���js --END

//���CSS --BG
  fis.match('/components/(bootstrap/css/*.css)', {   //bootstrap  css
    useCache: false,
    release: 'static/base/$1'
  })
//���CSS --END

//���ģ��
  fis.match('/indexTemp/(*.html)', {   //bootstrap  css
    useCache: false,
    release: 'index$3'
  })