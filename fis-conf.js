//������ĿԴ��
fis.set('project.ignore', [
  'components/**',
  '*',              //�����ļ�������
]);
//��ܻ���js css���·��
fis.set('frame','/static/base');


//���js --BG
  fis.media('jq').match('/components/(jquery/*.js)', {    //jquery
    release: '${frame}/$1'
  })
  fis.match('/components/(angular/*.js)', {               //angular
    release: '${frame}/$1'
  })
//���js --END

//���CSS --BG
  fis.match('/components/(bootstrap/css/*.css)', {     //bootstrap  css
    release: '${frame}/$1'
  })
//���CSS --END

//���ģ��
  fis.match('/indexTemp/(*.html)', {   //bootstrap  css
    useCache: false,
    release: 'index$3'
  })