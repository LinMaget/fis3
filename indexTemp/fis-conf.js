//fis.set('project.ignore', [    //  match ƥ�������Ҳ���ᱻ����
//  'components/**',
//  '*',              //�����ļ�������
//]);


//��ܻ���js css���·��
fis.set('frame','/static/base');
fis.match("**",{  //Ĭ��û����ûƥ�䵽�ļ�������
  release : false
})

/**********************����������CSS��JS������Ŀ��Ҫ��·��*****************/
//���js --BG
  fis.match('/components/(jquery/*.js)', {    //jquery
    release: '${frame}/$1'
  })
      .match('/components/(angular/*.js)', {               //angular
    release: '${frame}/$1'
  })
//���js --END

//���CSS --BG
  fis.match('/components/(bootstrap/css/*.css)', {     //bootstrap  css
    release: '${frame}/$1'
  })
//���CSS --END

//���ģ��
  fis.match('/indexTemp/(*.html)', {  //html����  ������ҳ��css,js����
    //isJsLike: true,    //�������JS������ �Ͳ����Զ�����ҳ���ϵ� css js����
    release: 'index$3'
  })
//��� ���ú���js �������body�����
fis.match('::packager', {
    postpackager: fis.plugin('loader', {})
})
/**********************����������CSS��JSѹ���ϲ�*****************/
fis.media('prod')
    .match('*.js', {
        // fis-optimizer-uglify-js �������ѹ����������
        optimizer: fis.plugin('uglify-js')})
    .match('*.css', {
        // fis-optimizer-clean-css �������ѹ����������
        optimizer: fis.plugin('clean-css')})
    .match('*.png', {
        // fis-optimizer-png-compressor �������ѹ����������
        optimizer: fis.plugin('png-compressor')})

