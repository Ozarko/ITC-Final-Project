const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@routes": "src/routes",
    "@image": "src/image",
    "@config": "src/config",
    "@pages": "src/pages",
    "@UI": "src/components/UI",
  })(config);

  return config;
};
