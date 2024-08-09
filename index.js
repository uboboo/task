const express = require('express');
const app = express();
const path = require('node:path');
app.set('view engine', 'ejs');
// publicディレクトリ以下のファイルを静的ファイルとして配信
app.use('/static', express.static(path.join(__dirname, 'public')));

const logMiddleware = (req, res, next) => {
  console.log(req.method, req.path);
  next();
}

app.get('/', logMiddleware, (req, res) => {
  const users = ['alpha', 'beta', 'gamma'];
  res.render(path.resolve(__dirname, 'views/index.ejs'), { users: users });
})

app.get('/user/:id', logMiddleware, (req, res) => {
  // :idをreq.params.idとして受け取る
  res.status(200).send(req.params.id);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});

// ポート: 3000でサーバーを起動
app.listen(3000, () => {
  // サーバー起動後に呼び出されるCallback
  console.log('start listening');
});
