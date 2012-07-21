var config = module.exports;

config["Browser tests"] = {
  environment: "browser",
  rootPath: "public/",
  sources: ["views/**/*.js"],
  tests: ["test/spec/views/loginModalViewTest.js"],
//  libs: ["scripts/libs/**/*.js", "scripts/require.js", "scripts/main.js"],
  libs: ["require.js", "main.js"],
  extensions: [require("buster-amd")]/*,
  "buster-amd": {
    pathMapper: function(path) {
      if (path.match(/\.html$/)) {
        return "text!" + path.replace(/^\//, "").replace(/\.html$/, "");
      } else {
        return path.replace(/^\//, "").replace(/\.js$/, "");
      }
    }
  }*/
};
