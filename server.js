const express  = require('express');

let app = express();

let port = 3000 || process.env.port;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`create server on ${port} port`);
});
