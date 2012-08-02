define([
  'backbone'
], function(Backbone) {

  var Credentials = Backbone.Model.extend({
    url: '/session/new',
    defaults: {
      username: null,
      password: null
    }
  });

  return Credentials;
});
