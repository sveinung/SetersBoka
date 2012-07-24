define([
  'backbone',
  'mustache',
  'text!templates/loginModalView.html',
  'views/loginView',
  'bootstrap-modal'
], function(Backbone, Mustache, html, LoginView) {

  var LoginModalView = Backbone.View.extend({
    initialize: function() {
      this.render();
      this.loginView = new LoginView({
        el: this.$('.login-view')
      });
    },
    render: function() {
      this.$el.html(Mustache.to_html(html));
      return this;
    }
  });
  
  return LoginModalView;
});
