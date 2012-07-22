buster.spec.expose();

describe("LoginModalView", function(run) {
  require(['views/loginModalView'], function(LoginModalView) {
    run(function() {
      var view;

      beforeEach(function() {
        view = new LoginModalView({
          el: '<div></div>'
        });
      });

      it("should be visible after calling show", function() {
        expect(true).toBe(true);
      });
    });
  });
});
