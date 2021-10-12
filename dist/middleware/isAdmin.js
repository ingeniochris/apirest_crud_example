"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAdmin = void 0;

var _Account = _interopRequireDefault(require("../models/Account"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var isAdmin = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res, next) {
    try {
      var token = req.token;
      var verifyAccount = yield _Account.default.findOne({
        accountVerifyToken: token,
        accountVerifyTokenExpiration: {
          $gt: Date.now()
        }
      });
      var {
        role
      } = verifyAccount;
      console.log(role);
      if (role === 'ROLE_COLLABORATOR') return res.status(403).json({
        msg: 'admin role is necessary'
      });
      next();
      return;
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        msg: error
      });
    }
  });

  return function isAdmin(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.isAdmin = isAdmin;