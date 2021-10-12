"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validationParams = exports.validationLogin = exports.validationCreateUser = exports.validationCollaborator = void 0;

var _expressValidator = require("express-validator");

var validationCreateUser = [(0, _expressValidator.check)("email", "Add valid email ").isEmail(), (0, _expressValidator.check)("firstName", "FirstName is required").not().isEmpty(), (0, _expressValidator.check)("lastName", "LastName is required").not().isEmpty(), (0, _expressValidator.check)("password", "The password is min 6 characters").isLength({
  min: 6
}), (0, _expressValidator.check)("confirmPassword", "The Confirm password is min 6 characters").isLength({
  min: 6
}), // check("role", "Add role , example.- ROLE_USER or ROLE_ADMIN ")
//   .not()
//   .isEmpty()
//   .toUpperCase(),
(0, _expressValidator.body)("confirmPassword").custom((value, _ref) => {
  var {
    req
  } = _ref;

  if (value !== req.body.password) {
    throw new Error("Password confirmation does not match password");
  }

  return true;
})];
exports.validationCreateUser = validationCreateUser;
var validationLogin = [(0, _expressValidator.check)("email", "Add valid email ").isEmail(), (0, _expressValidator.check)("password", "The password is min 6 characters").isLength({
  min: 6
})]; //(id,nombre_colaborador,fecha_nacimiento, rfc, fecha_inicio,estado_colaborador,area)

exports.validationLogin = validationLogin;
var validationCollaborator = [(0, _expressValidator.check)("nombre_colaborador", "Add collaborator name ").not().isEmpty(), (0, _expressValidator.check)("fecha_nacimiento", "Add date of birth").not().isEmpty(), (0, _expressValidator.check)("rfc", "Add rfc").not().isEmpty(), (0, _expressValidator.check)("fecha_inicio", "Add start date").not().isEmpty(), (0, _expressValidator.check)("estado_colaborador", "Add collaborator state").not().isEmpty(), (0, _expressValidator.check)("area", "Add area").not().isEmpty()];
exports.validationCollaborator = validationCollaborator;
var validationParams = [(0, _expressValidator.param)("id").custom((value, _ref2) => {
  var {
    req
  } = _ref2;

  if (value !== req.params.id) {
    throw new Error("id is required into params url");
  }

  return true;
})];
exports.validationParams = validationParams;