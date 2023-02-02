const { dependencies } = require("./package.json");

module.exports = {
  name: "my-dashboard",
  remotes: {
    remote: "remote@http://localhost:3001/remoteEntry.js",
  },
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
  },
};