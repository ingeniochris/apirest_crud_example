"use strict"; //Models DB´s

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCollaboratorService = exports.searchCollaboratorIdService = exports.searchAllCollaboratorsAllServices = exports.deleteCollaboratorService = exports.createCollaboratorService = void 0;

var _Collaborator = _interopRequireDefault(require("../models/Collaborator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * This search all collaborators
 * @returns all collaborators
 */
var searchAllCollaboratorsAllServices = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (_) {
    try {
      var collaborators = yield _Collaborator.default.find();
      return collaborators;
    } catch (error) {
      console.log(error);
      return {
        msg: "Collaborator don´t exists"
      };
    }
  });

  return function searchAllCollaboratorsAllServices(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * This search one collaborator in db
 * @param {id} id Id collaborator.
 * @returns One collaborator
 */


exports.searchAllCollaboratorsAllServices = searchAllCollaboratorsAllServices;

var searchCollaboratorIdService = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (id) {
    try {
      var collaborator = yield _Collaborator.default.find({
        _id: {
          $in: id
        }
      });
      return collaborator;
    } catch (error) {
      console.log(error);
      return {
        msg: "Collaborator don´t exists"
      };
    }
  });

  return function searchCollaboratorIdService(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
/**
 * Add collaborator in DB
 * @param {String} nombre_colaborador Nombre del colaborador.
 * @param {String} fecha_nacimiento Fecha de nacimiento.
 * @param {String} rfc rfc del colaborador.
 * @param {String} fecha_inicio fecha de inicio.
 * @param {String} estado_colaborador estado active notActive.
 * @param {String} area area.
 * @returns {Object} saveCollaborator
 */


exports.searchCollaboratorIdService = searchCollaboratorIdService;

var createCollaboratorService = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (_ref3) {
    var {
      nombre_colaborador,
      fecha_nacimiento,
      rfc,
      fecha_inicio,
      estado_colaborador,
      area
    } = _ref3;

    try {
      var searchCollaborator = yield _Collaborator.default.findOne({
        nombre_colaborador
      });
      if (searchCollaborator) return {
        msg: "The collaborator already exists"
      };
      var newCollaborator = new _Collaborator.default({
        nombre_colaborador,
        fecha_nacimiento,
        rfc,
        fecha_inicio,
        estado_colaborador,
        area
      });
      var saveCollaborator = yield newCollaborator.save();
      return saveCollaborator;
    } catch (error) {
      console.error(error);
      return {
        msg: "Collaborator don´t created"
      };
    }
  });

  return function createCollaboratorService(_x3) {
    return _ref4.apply(this, arguments);
  };
}();
/**
 * Update Collaborator
 * @param {ObjectId} id
 * @param {String} nombre_colaborador Nombre del colaborador.
 * @param {String} fecha_nacimiento Fecha de nacimiento.
 * @param {String} rfc rfc del colaborador.
 * @param {String} fecha_inicio fecha de inicio.
 * @param {String} estado_colaborador estado active notActive.
 * @param {String} area area.
 * @returns {json} msg message
 */


exports.createCollaboratorService = createCollaboratorService;

var updateCollaboratorService = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(function* (id, _ref5) {
    var {
      nombre_colaborador,
      fecha_nacimiento,
      rfc,
      fecha_inicio,
      estado_colaborador,
      area
    } = _ref5;

    try {
      var searchCollaboratorId = yield _Collaborator.default.findByIdAndUpdate(id, {
        $set: {
          nombre_colaborador,
          fecha_nacimiento,
          rfc,
          fecha_inicio,
          estado_colaborador,
          area
        }
      });
      if (!searchCollaboratorId) return {
        msg: 'the Collaborator has not been found'
      };
      return {
        msg: "the Collaborator has been updated successfully"
      };
    } catch (error) {
      console.error(error);
      return {
        msg: "Collaborator don´t updating"
      };
    }
  });

  return function updateCollaboratorService(_x4, _x5) {
    return _ref6.apply(this, arguments);
  };
}();
/**
 * Delete Collaborator
 * @param {ObjectId} id
 * @returns {Json} msg message
 */


exports.updateCollaboratorService = updateCollaboratorService;

var deleteCollaboratorService = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(function* (id) {
    try {
      var collaborator = yield _Collaborator.default.deleteOne({
        _id: id
      });
      if (collaborator.deletedCount < 1) return {
        msg: 'the movie has not been found'
      };
      return {
        msg: "Collaborator deleted successfully"
      };
    } catch (error) {
      console.error(error);
      return {
        msg: "Collaborator don´t deleting"
      };
    }
  });

  return function deleteCollaboratorService(_x6) {
    return _ref7.apply(this, arguments);
  };
}();

exports.deleteCollaboratorService = deleteCollaboratorService;