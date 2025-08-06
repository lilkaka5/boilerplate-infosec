/* This should be the top of your myApp.js file */
const express = require('express');
const helmet = require('helmet'); // <-- 1. ADD THIS LINE to import Helmet.

const app = express();

// ... a lot of other code from the boilerplate might be here ...

// 2. ADD THIS LINE. It's best practice to place it high up.
// This tells your Express app to use Helmet's default security headers.
app.use(helmet());
















































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
