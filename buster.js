var config = module.exports;

config["Browser tests"] = {
  environment: "browser",
  rootPath: "public/",
  sources: [
    "views/**/*.js",
    "models/**/*.js"
  ],
  tests: ["test/spec/views/*.js"],
  libs: [
    "require.js",
    "test/main.js"
  ],
  resources: [
    "lib/jquery/jquery.min.js",
    "lib/mustache/mustache.js",
    "lib/underscore/underscore-min.js",
    "lib/backbone/backbone-min.js",
    "lib/bootstrap/js/*.js",
    "lib/require/text.js",
    "templates/*.html",
    "test/lib/**/*.js"
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
