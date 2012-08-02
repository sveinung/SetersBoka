buster.spec.expose();

describe("LoginView", function(run) {
  require([
    'views/loginView',
    'responseFaker'
  ], function(LoginView, responseFaker) {
    run(function() {
      var view;

      beforeEach(function() {
        responseFaker.call(this);
        view = new LoginView({
          el: '<div></div>'
        });
      });

      it("should emit a success event if successful", function(done) {
        options = {
          statusCode: 200,
          headers: { "Content-Type": "application/json" }
        };
        view.on('granted', done);
        this.fakeResponse({}, options, function() {
          view.attemptLogin({preventDefault: function() {}});
        });
        expect(true).toBeTruthy();
      });
    });
  });
});
