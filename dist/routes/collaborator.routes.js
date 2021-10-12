"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _Auth = require("../middleware/Auth");

var _isAdmin = require("../middleware/isAdmin");

var _collaboratorCtrl = require("../controllers/collaboratorCtrl");

var _ValidationInputs = require("../middleware/ValidationInputs");

//middleware
var router = (0, _express.Router)(); //Route protected api/colaborador/

router.get("/", _Auth.AuthMiddleware, _collaboratorCtrl.searchCollaboratorAll); //Route protected api/colaborador/:id searchCollaborator ID

router.get("/:id", _Auth.AuthMiddleware, _collaboratorCtrl.searchCollaboratorId); //Route protected api/colaborador

router.post("/add", [_Auth.AuthMiddleware, _ValidationInputs.validationCollaborator], _collaboratorCtrl.addCollaborator); //Route protected api/colaborador/update/:id

router.put("/update/:id", [_Auth.AuthMiddleware, _ValidationInputs.validationParams, _ValidationInputs.validationCollaborator], _collaboratorCtrl.updateCollaborator); //Route protected api/colaborador/delete/:id

router.delete("/delete/:id", [_Auth.AuthMiddleware, _isAdmin.isAdmin], _collaboratorCtrl.deleteCollaborator);
var _default = router;
exports.default = _default;