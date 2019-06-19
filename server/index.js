const express = require('express');
const path = require('path');
const App = express();

App.use(express.static(path.join(__dirname, './client/dist')));

const port = 3000;

App.listen(port, () => {
  console.log(`You are now connected to port ${port}`);
})

