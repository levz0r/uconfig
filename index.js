const _get = require("lodash.get");
const fs = require("fs");

module.exports.default = class uConfig {
  constructor(path) {
    this.path = path;
    this.config = JSON.parse(fs.readFileSync(this.path).toString());
  }

  get(path, default_value = null) {
    return _get(this.config, path, default_value);
  }
};
