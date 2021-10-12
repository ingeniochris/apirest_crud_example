"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose.default.Schema;
var collaboratorSchema = new Schema({
  nombre_colaborador: {
    type: String,
    required: true
  },
  fecha_nacimiento: {
    type: String,
    required: true
  },
  rfc: {
    type: String,
    required: true
  },
  fecha_inicio: {
    type: String,
    required: true
  },
  estado_colaborador: {
    type: String,
    required: true
  },
  area: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

var _default = _mongoose.default.model("Collaborator", collaboratorSchema);

exports.default = _default;