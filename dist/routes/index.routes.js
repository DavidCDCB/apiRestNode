"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _user = _interopRequireDefault(require("../controllers/user.controller"));

var router = new _express.Router();
router.get("/api/users", _user["default"].getUsers);
router.get("/api/user/:id", _user["default"].getUser);
router.post("/api/user", _user["default"].saveUser);
var _default = router;
exports["default"] = _default;