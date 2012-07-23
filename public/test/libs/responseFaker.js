//     responseFaker.js 0.1.2
//     A high-level API for sinon.js fakeServer
//
//     Copyright 2012, Kim Joar Bekkelund, MIT Licensed
//     http://kimjoar.net
//
// responseFaker.js can be mixed into any object:
//
//     responseFaker.call(obj);
//
// If you want responseFaker.js globally available in your tests:
//
//     responseFaker.call(window);
//
// In both cases the `fakeResponse` and `fakeResponses` helpers will
// be available.
var responseFaker = (function(root, sinon) {

  // fakeResponse
  // ------------
  //
  // High-level helper for responding equally to all Ajax requests.
  //
  // Parameters:
  //
  // `response` specifies the response to all Ajax requests. If can be
  //   specified both as a string and as an object. In the latter case, the
  //   object is transformed into JSON using `JSON.stringify`.
  //
  // `options` is an optional hash with two keys:
  //
  // - `statusCode` which specify the status code for all requests. Defaults
  //   to 200 OK.
  // - `headers` which specify the headers for all requests. Defaults to
  //   specifying JSON as the content type.
  //
  // `callback` is the callback which should trigger an Ajax request, i.e. this
  // callback should include those Ajax requests that should have the specified
  // response.
  //
  // **Example:**
  //
  //     var response = { error: "Everything failed" };
  //     fakeResponse(response, { statusCode: 403 }, function() {
  //       // perform ajax request
  //     });
  function fakeResponse(response, options, callback) {
    var server;

    // As options are optional, `callback` can be the second argument.
    if (typeof callback === "undefined" && typeof options === "function") {
      callback = options;
      options = {};
    }

    // The response is either a string or transformed to a string
    if (typeof response !== "string") {
      response = JSON.stringify(response);
    }

    // Set default options
    options || (options = {});
    if (!options.statusCode) options.statusCode = 200;
    if (!options.headers) options.headers = { "Content-Type": "application/json" };

    // Set up the response
    server = sinon.fakeServer.create();
    server.respondWith([options.statusCode, options.headers, response]);

    // Trigger callback, which should include all the Ajax requests we want to
    // fake the response for.
    callback();

    server.respond();
    server.restore();
  }

  // fakeResponses
  // -------------
  //
  // High-level helper for responding differently to Ajax requests based on URL
  //
  // Parameters:
  //
  // `responses` is a hash with URLs as keys and responses as values. These
  // responses can be defined in three ways:
  //
  // - as a string
  // - as an object that can be JSON stringified
  // - as an object that includes the key `response` with the response as
  //   either a string or an object that can be JSON stringified, and
  //   optionally the keys `statusCode` and/or `headers`
  //
  // `callback` is the callback which should trigger an Ajax request, i.e. this
  // callback should include those Ajax requests that should have the specified
  // responses.
  //
  // **Example:**
  //
  //     var responses = {
  //       "/emails": [{ from: "mail@kimjoar.net", subject: "Testing" }],
  //       "/user": { username: "kimjoar" }
  //     }
  //
  //     fakeResponses(responses, function() {
  //       // perform ajax requests to `/emails` and `/user`
  //     });
  function fakeResponses(responses, callback) {
    var server = sinon.fakeServer.create(),
        response,
        options,
        url;

    // Set up the response for each URL
    for (url in responses) {
      response = responses[url];

      options = {};

      if (typeof response !== "string") {
        if (response.statusCode || response.headers || response.response) {
          options.statusCode = response.statusCode;
          options.headers = response.headers;
          response = response.response;
        }
        if (typeof response !== "string") {
          response = JSON.stringify(response);
        }
      }

      if (!options.statusCode) options.statusCode = 200;
      if (!options.headers) options.headers = { "Content-Type": "application/json" };

      server.respondWith(new RegExp(url), [options.statusCode, options.headers, response]);
    }

    callback();

    server.respond();
    server.restore();
  }

  // The mixin which include the helpers on the passed object.
  return function() {
    this.fakeResponse = fakeResponse;
    this.fakeResponses = fakeResponses;

    return this;
  };

})(this, sinon);
