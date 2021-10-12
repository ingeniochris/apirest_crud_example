"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startCtrl = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var startCtrl = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    res.json({
      apiName: "Jesus Christian Castillo Lozano - API rest",
      routes: {
        SignUp: {
          routeProtected: false,
          uri: "http://app-95dd171d-8b3f-4531-acfa-146935c2e464.cleverapps.io/api/auth/signup",
          method: "POST",
          bodyParams: {
            email: "chris@gmail.com",
            firstName: "jesus",
            lastName: "Castillo",
            password: "123456",
            confirmPassword: "123456",
            role: "ROLE_ADMIN"
          },
          headers: {
            key: "Content-type",
            value: "application/json"
          },
          response: "User created"
        },
        SignIn: {
          routeProtected: false,
          uri: "http://app-95dd171d-8b3f-4531-acfa-146935c2e464.cleverapps.io/api/user/login",
          method: "POST",
          bodyParams: {
            email: "chris@gmail.com",
            password: "123456"
          },
          headers: {
            key: "Content-type",
            value: "application/json"
          },
          response: "Token for a new sesion"
        },
        GetAllCollaborators: {
          routeProtected: true,
          uri: "",
          method: "GET",
          headers: [{
            key: "Content-type",
            value: "application/json"
          }, {
            key: "x-auth-token",
            value: "token"
          }],
          response: "All collaborators in DB"
        },
        AddCollaborator: {
          routeProtected: true,
          uri: "",
          method: "POST",
          bodyParams: {
            nombre_colaborador: "jesus castillo",
            fecha_nacimiento: "01/01/2021",
            rfc: "caje",
            fecha_inicio: "01/01/2021",
            estado_colaborador: "active",
            area: "developer"
          },
          headers: [{
            key: "Content-type",
            value: "application/json"
          }, {
            key: "x-auth-token",
            value: "token"
          }],
          response: "Success or error "
        },
        SearchCollaborator: {
          routeProtected: true,
          uri: "",
          method: "GET",
          params: {
            id: "e8d9add6-986c-4e80-9ef1-43c696332d41"
          },
          headers: [{
            key: "Content-type",
            value: "application/json"
          }, {
            key: "x-auth-token",
            value: "token"
          }],
          response: "Collaborator or don´t match id"
        },
        UpdateCollaborator: {
          routeProtected: true,
          uri: "",
          method: "PUT",
          params: {
            id: ""
          },
          bodyParams: {
            nombre_colaborador: "almaguer",
            fecha_nacimiento: "11/10/1990",
            rfc: "alme901011",
            fecha_inicio: "11/10/2021",
            estado_colaborador: "notActive",
            area: "developer"
          },
          headers: [{
            key: "Content-type",
            value: "application/json"
          }, {
            key: "x-auth-token",
            value: "token"
          }],
          response: "Success or error "
        },
        DeleteCollaborator: {
          routeProtected: true,
          uri: "",
          method: "DELETE",
          params: {
            id: ""
          },
          headers: [{
            key: "Content-type",
            value: "application/json"
          }, {
            key: "x-auth-token",
            value: "token"
          }],
          response: "Success or error "
        }
      }
    });
  });

  return function startCtrl(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.startCtrl = startCtrl;