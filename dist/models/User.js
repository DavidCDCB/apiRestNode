"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var usuarioSchema = new _mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es necesario']
  },
  apellido: {
    type: String,
    required: false
  },
  email: {
    type: String,
    unique: true,
    required: [true, "El correo es necesario"]
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Usuario', usuarioSchema);

exports["default"] = _default;