define([
  'backbone',
  'mustache',
  'text!templates/loginView.html',
  'models/credentials',
  'underscore'
], function(Backbone, Mustache, html, Credentials, _) {

  var LoginView = Backbone.View.extend({
    events: {
      'submit form': 'attemptLogin'
    },

    initialize: function() {
      _.bindAll(this, 'granted');
      this.credentials = new Credentials();
      this.render();
    },

    render: function() {
      this.$el.html(Mustache.to_html(html));
      return this;
    },

    attemptLogin: function(e) {
      e.preventDefault();
      this.credentials.save({
        username: this.$('#username').val(),
        password: this.$('#password').val()
      }, {
        success: this.granted
      });
    },

    granted: function(model, res) {
      this.trigger('granted');
    }
  });

  return LoginView;
});
