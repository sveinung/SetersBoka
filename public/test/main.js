require.config({
  baseUrl: '../scripts/',
  paths: {
    'backbone': '../scripts/libs/backbone/backbone-min',
    'jquery': '../scripts/libs/jquery/jquery.min',
    'underscore': '../scripts/libs/underscore/underscore-min'
  },
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'jquery': {
      exports: 'jQuery'
    },
    'underscore': {
      exports: '_'
    }
  }
});

define(function(require) {
  require('./spec/views.spec.js');
  jasmine.getEnv().addReporter(
    new jasmine.HtmlReporter()
  );
  jasmine.getEnv().execute();
});
