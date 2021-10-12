"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "authRoutes", {
  enumerable: true,
  get: function get() {
    return _auth.default;
  }
});
Object.defineProperty(exports, "collaboratorRoutes", {
  enumerable: true,
  get: function get() {
    return _collaborator.default;
  }
});
Object.defineProperty(exports, "startRoutes", {
  enumerable: true,
  get: function get() {
    return _start.default;
  }
});

var _collaborator = _interopRequireDefault(require("./collaborator.routes"));

var _auth = _interopRequireDefault(require("./auth.routes"));

var _start = _interopRequireDefault(require("./start.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }