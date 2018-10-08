import express from 'express';
import fs from 'fs';
import mime from 'mime';
const app = express();

import webpack from 'webpack';
import middleware from 'webpack-dev-middleware';
import webpackConfig from '../../webpack.config';
const compiler = webpack(webpackConfig);

// Router는 기본 URL을 지정하기 위함
const api = express.Router();
const hydrogen = express.Router();
const yummy = express.Router();

const PORT = process.env.PORT || 8080;

// 기본 URL = /api
app.use('/api', api);

// 기본 URL = /hydrogen
app.use('/hydrogen', hydrogen);

// 기본 URL = /yummy
app.use('/yummy', yummy);
app.use(middleware(compiler, {
}));

// /hydrogen/ 으로 시작하는 모든 URL은 본 메소드를 거침
// localhost:8080/hydrogen 으로 접속 시 hydrogen 테스트 페이지로 접속
hydrogen.use('/', function(req, res, next) {
  const baseDir = __dirname + '/../../hydrogen';
  
  // 기본 URL로 왔을 때 index.html을 바로 띄워줌
  if (req.path === '/') {
    res.redirect('/hydrogen/index.html');
    return;
  }
  
  // 요청받은 파일의 URL을 설정
  const fileUrl = baseDir + req.path;
  console.log(fileUrl);
  
  // 파일을 읽음
  fs.readFile(fileUrl, function(err, data) {
    if (err)
      console.log(err);
    else {
      // 파일을 브라우저에게 전송
      res.writeHead(200, {'Content-Type': mime.getType(fileUrl)});
      res.end(data);
    }
  });
});

// /yummy/ 으로 시작하는 모든 URL은 본 메소드를 거침
// localhost:8080/yummy 으로 접속 시 yummy 테스트 페이지로 접속
yummy.use('/', function(req, res, next) {
  const baseDir = __dirname + '/../../yummy';
  
  // 기본 URL로 왔을 때 index.html을 바로 띄워줌
  if (req.path === '/') {
    res.redirect('/yummy/index.html');
    return;
  }
  
  // 요청받은 파일의 URL을 설정
  const fileUrl = baseDir + req.path;
  console.log(fileUrl);
  
  // 파일을 읽음
  fs.readFile(fileUrl, function(err, data) {
    if (err)
      console.log(err);
    else {
      // 파일을 브라우저에게 전송
      res.writeHead(200, {'Content-Type': mime.getType(fileUrl)});
      res.end(data);
    }
  });
});

app.listen(PORT, '0.0.0.0',  function() {
  console.log("http://35.232.22.98 server is starting!" + PORT);
});