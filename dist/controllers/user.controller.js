"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _User = _interopRequireDefault(require("../models/User"));

var responseBody = function responseBody(estado, res, mensaje) {
  return {
    estatus: estado,
    info: mensaje,
    data: res
  };
};

var _default = {
  getUsers: function () {
    var _getUsers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _User["default"].find().then(function (datos, error) {
                if (datos == null || datos.length == 0 || error) {
                  return res.status(404).json(responseBody(false, datos, "Sin resultados"));
                } else {
                  return res.status(200).json(responseBody(true, datos, "Datos Consultados"));
                }
              });

            case 3:
              _context.next = 9;
              break;

            case 5:
              _context.prev = 5;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);
              return _context.abrupt("return", res.status(500).json({
                alerta: 'Error en servidor'
              }));

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 5]]);
    }));

    function getUsers(_x, _x2) {
      return _getUsers.apply(this, arguments);
    }

    return getUsers;
  }(),
  getUser: function () {
    var _getUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _User["default"].findById(req.params.id).then(function (datos, error) {
                if (datos == null || datos.length == 0 || error) {
                  return res.status(404).json(responseBody(false, datos, "Sin resultados"));
                } else {
                  return res.status(200).json(responseBody(true, datos, "Datos Consultados"));
                }
              });

            case 3:
              _context2.next = 9;
              break;

            case 5:
              _context2.prev = 5;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);
              return _context2.abrupt("return", res.status(500).json({
                alerta: 'Error en servidor'
              }));

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 5]]);
    }));

    function getUser(_x3, _x4) {
      return _getUser.apply(this, arguments);
    }

    return getUser;
  }(),
  saveUser: function () {
    var _saveUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
      var user;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              user = new _User["default"](req.body);
              _context3.prev = 1;
              _context3.next = 4;
              return user.save(function (err, usuarioDB) {
                if (err) {
                  return res.status(400).json(responseBody(false, err, "Registro Fallido"));
                } else {
                  return res.status(200).json(responseBody(true, usuarioDB, "Registro Exitoso"));
                }
              });

            case 4:
              _context3.next = 10;
              break;

            case 6:
              _context3.prev = 6;
              _context3.t0 = _context3["catch"](1);
              console.log(_context3.t0);
              return _context3.abrupt("return", res.status(500).json({
                alerta: 'Error en servidor'
              }));

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 6]]);
    }));

    function saveUser(_x5, _x6) {
      return _saveUser.apply(this, arguments);
    }

    return saveUser;
  }()
};
exports["default"] = _default;