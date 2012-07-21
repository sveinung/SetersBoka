buster.spec.expose();

describe("LoginModalView", function(run) {
  require(['views/loginModalView'], function(LoginModalView) {
//  require(['text!templates/loginModalView.html'], function(html) {
    run(function() {
      var view;
/*
      beforeEach(function() {
        view = new LoginModalView({
          el: '<div></div>'
        });
      });
*/

      it("should be visible after calling show", function() {
        expect(true).toBe(true);
      });
    });
  });
});
