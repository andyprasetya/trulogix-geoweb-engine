var express = require('express')
	, app = express()
	, port = process.env.PORT || 3000;

app.use(require('./routes'));

app.listen(port, function() {
  console.log('TruLogix is up + running @:' + port);
});
