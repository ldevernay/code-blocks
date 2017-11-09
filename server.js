const express = require('express');
const app = express();


app.use(express.static(__dirname + '/public'));

// Set port to env variable for Heroku, 3000 for dev
const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`code-blocks listening on port ${port}!`)
})
