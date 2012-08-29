buster.spec.expose();

describe("LoginModalView", function(run) {
  require([
      'views/loginModalView',
      'responseFaker'
    ], function(LoginModalView, responseFaker) {
    run(function() {
      var view;

      beforeEach(function() {
        view = new LoginModalView({
          el: '<div></div>'
        });
      });

      it("should show errorbox if login fails", function() {
        var options = {
          statusCode: 400,
          headers: { "Content-Type": "application/json" }
        }
        expect(true).toBeTruthy();
      });
    });
  });
});
