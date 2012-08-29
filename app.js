
/**
 * Module dependencies.
 */

var express = require('express'),
    mongoose = require('mongoose'),
    models = require('./lib/db/models'),
    Document,
    User,
    LoginToken,
    db;

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
  app.use(express.cookieParser());
  app.use(express.session({ secret: "keyboard cat" }));
  app.use(express.session({ store: mongoStore(app.set('db-uri')), secret: 'topsecret' }));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  app.set('db-uri', 'mongodb://localhost/setersboka-development');
});

app.configure('production', function(){
  app.use(express.errorHandler());
  app.set('db-uri', 'mongodb://localhost/setersboka-production');
});

models.defineModels(mongoose, function() {
  app.Document = Document = mongoose.model('Document');
  app.User = User = mongoose.model('User');
  app.LoginToken = LoginToken = mongoose.model('LoginToken');
  db = mongoose.connect(app.set('db-uri'));
});

require('./boot')(app);

app.listen(80, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
