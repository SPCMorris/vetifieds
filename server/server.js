const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    app = express();

    app.use(bodyParser.json({extended: false}));
    app.use(cors());

    app.set('port', process.env.PORT || 1337);

    app.use(express.static('build'));

    app.listen(app.get('port'), function() {
      console.log('Express server listening to port: ', app.get('port'));
    })
