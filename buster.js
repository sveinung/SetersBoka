var config = module.exports;

config["Browser tests"] = {
  environment: "browser",
  rootPath: "public/",
  sources: ["views/**/*.js"],
  tests: ["test/spec/views/loginModalViewTest.js"],
  libs: [
    "require.js",
    "test/main.js"
  ],
  resources: [
    "libs/jquery/jquery.min.js",
    "libs/mustache/mustache.js",
    "libs/underscore/underscore-min.js",
    "libs/backbone/backbone-min.js",
    "libs/bootstrap/js/*.js",
    "libs/require/text.js",
    "templates/*.html",
    "test/libs/**/*.js"
  ],
  extensions: [require("buster-amd")],
  "buster-amd": {
    pathMapper: function(path) {
      if (path.match(/\.html$/)) {
        return "text!" + path.replace(/^\//, "").replace(/\.html$/, "");
      } else {
        return path.replace(/^\//, "").replace(/\.js$/, "");
      }
    }
  }
};
