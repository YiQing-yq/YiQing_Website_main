const express = require('express');
var path = require('path');
//require('./js/connectdb.js');
const app = express();
const port = 3000;
 
// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')));
 
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/HTML/index.html');
});
 
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});