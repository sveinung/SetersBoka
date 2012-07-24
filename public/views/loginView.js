define([
  'backbone',
  'mustache',
  'text!templates/loginView.html'
], function(Backbone, Mustache, html) {

  var LoginView = Backbone.View.extend({
    initialize: function() {
      this.render();
    },

    render: function() {
      this.$el.html(Mustache.to_html(html));
      return this;
    }
  });

  return LoginView;
});
