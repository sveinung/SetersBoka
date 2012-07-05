require.config({
  paths: {
    'backbone': 'libs/backbone/backbone-min',
    'jquery': 'libs/jquery/jquery.min',
    'underscore': 'libs/underscore/underscore-min'
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

require([
  'app'
], function(App) {
  console.log(App);
});
