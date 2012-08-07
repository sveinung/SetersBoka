require.config({
  paths: {
    'text': 'lib/require/text',
    'mustache': 'lib/mustache/mustache',
    'backbone': 'lib/backbone/backbone-min',
    'jquery': 'lib/jquery/jquery.min',
    'underscore': 'lib/underscore/underscore-min',
    'bootstrap-modal': 'lib/bootstrap/js/bootstrap-modal',
    'sinon': 'test/lib/sinon-1.4.2',
    'responseFaker': 'test/lib/responseFaker'
  },
  shim: {
    'mustache': {
      exports: 'Mustache'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'jquery': {
      exports: 'jQuery'
    },
    'underscore': {
      exports: '_'
    },
    'bootstrap-modal': {
      deps: ['jquery'],
      exports: 'Modal'
    },
    'sinon': {
      exports: 'sinon'
    },
    'responseFaker': {
      deps: ['sinon'],
      exports: 'responseFaker'
    }
  }
});

