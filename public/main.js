require.config({
  paths: {
    'text': 'libs/require/text',
    'mustache': 'libs/mustache/mustache',
    'backbone': 'libs/backbone/backbone-min',
    'jquery': 'libs/jquery/jquery.min',
    'underscore': 'libs/underscore/underscore-min',
    'bootstrap-modal': 'libs/bootstrap/js/bootstrap-modal'
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
    }
  }
});

