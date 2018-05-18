var express = require('express');
var app = express();
var path = require('path');
 
//ָ����̬��Դ����Ŀ¼
app.use(express.static(require('path').join(__dirname)));
// app.use(express.static(require('path').join(__dirname, 'views'))); ������ļ��д����Դ�����ֱ���Ļ����ǾͶ�use���ξͿ�����
// �趨views��������Ϊ��ͼ��ŵ�Ŀ¼
app.set('views', (__dirname + "/public"));
// app.set('views', __dirname);
// �޸�ģ���ļ��ĺ�׺��Ϊhtml
app.set( 'view engine', 'html' );
// ����ejsģ��
app.engine( '.html', require( 'ejs' ).__express );
 
app.get("/", function(req, res) {
  res.render('index');
});
 
var server = app.listen(1336, "127.0.0.1",function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("Server running at http://%s:%s", host, port)
});