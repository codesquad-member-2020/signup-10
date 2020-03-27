const path = require("path");

module.exports = {
  mode: "development",
  entry: { signup: "./js/signUp.js", signUp_ellin: "./js/signUp_ellin.js" },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name]_bundle.js"
  },
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    browsers: ["last 2 versions"]
                  }
                }
              ]
            ]
          }
        }
      }
    ]
  }
};
