"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCollaborator = exports.searchCollaboratorId = exports.searchCollaboratorAll = exports.deleteCollaborator = exports.addCollaborator = void 0;

var _expressValidator = require("express-validator");

var _Collaborators = require("../services/Collaborators");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var searchCollaboratorAll = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res, next) {
    try {
      var collaboratorAll = yield (0, _Collaborators.searchAllCollaboratorsAllServices)();
      res.json(collaboratorAll);
    } catch (error) {
      console.error(error), next();
    }
  });

  return function searchCollaboratorAll(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.searchCollaboratorAll = searchCollaboratorAll;

var searchCollaboratorId = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res, next) {
    try {
      var collaboratorId = yield (0, _Collaborators.searchCollaboratorIdService)(req.params.id);
      if (!collaboratorId) return res.json({
        msg: "Collaborator don´t match in System"
      });
      res.json(collaboratorId);
    } catch (error) {
      console.error(error), next();
    }
  });

  return function searchCollaboratorId(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.searchCollaboratorId = searchCollaboratorId;

var addCollaborator = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res, next) {
    var token = req.header("x-auth-token");
    var errores = (0, _expressValidator.validationResult)(req);

    if (!errores.isEmpty()) {
      return res.status(400).json({
        errores: errores.array()
      });
    }

    try {
      var collaborator = yield (0, _Collaborators.createCollaboratorService)(_objectSpread(_objectSpread({}, req.body), {}, {
        token
      }));
      return res.status(201).json(collaborator);
    } catch (error) {
      v;
    }
  });

  return function addCollaborator(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.addCollaborator = addCollaborator;

var updateCollaborator = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (req, res, next) {
    var token = req.header("x-auth-token");
    var errores = (0, _expressValidator.validationResult)(req);

    if (!errores.isEmpty()) {
      return res.status(400).json({
        errores: errores.array()
      });
    }

    try {
      var collaborator = yield (0, _Collaborators.updateCollaboratorService)(req.params.id, _objectSpread(_objectSpread({}, req.body), {}, {
        token
      }));
      return res.status(201).json(collaborator);
    } catch (error) {
      console.error(error), next();
    }
  });

  return function updateCollaborator(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateCollaborator = updateCollaborator;

var deleteCollaborator = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(function* (req, res, next) {
    try {
      var _deleteCollaborator = yield (0, _Collaborators.deleteCollaboratorService)(req.params.id);

      return res.status(201).json(_deleteCollaborator);
    } catch (error) {
      console.error(error);
      next();
    }
  });

  return function deleteCollaborator(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteCollaborator = deleteCollaborator;