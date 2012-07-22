define([
  'backbone',
  'mustache',
  'text!templates/loginModalView.html',
  'bootstrap-modal'
], function(Backbone, Mustache, html) {

  var LoginModalView = Backbone.View.extend({
    initialize: function() {
      this.render();
    },
    render: function() {
      this.$el.html(Mustache.to_html(html));
    },
    show: function() {
      this.$el.find('#login-modal').modal('show');
    }
  });
  
  return LoginModalView;
});
