"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("./config");

var _app = _interopRequireDefault(require("./app"));

require("./database");

_app["default"].listen(process.env.PORT, process.env.IP, function () {
  console.log("Server running on ".concat(process.env.IP, ":").concat(process.env.PORT));
});