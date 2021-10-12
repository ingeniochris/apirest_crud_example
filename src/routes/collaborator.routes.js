"use strict";

import { Router } from "express";

//middleware
import { AuthMiddleware } from "../middleware/Auth";
import { isAdmin } from "../middleware/isAdmin";

import {
  searchCollaboratorAll,
  searchCollaboratorId,
  addCollaborator,
  deleteCollaborator,
  updateCollaborator,
} from "../controllers/collaboratorCtrl";

import {
  validationCollaborator,
  validationParams,
} from "../middleware/ValidationInputs";

const router = Router();
//Route protected api/colaborador/
router.get("/",AuthMiddleware, searchCollaboratorAll)

//Route protected api/colaborador/:id searchCollaborator ID
router.get("/:id", AuthMiddleware, searchCollaboratorId);

//Route protected api/colaborador
router.post("/add",[ AuthMiddleware, validationCollaborator], addCollaborator);

//Route protected api/colaborador/update/:id
router.put(
  "/update/:id",
  [AuthMiddleware,
  validationParams,
  validationCollaborator],
  updateCollaborator
);

//Route protected api/colaborador/delete/:id
router.delete("/delete/:id", [AuthMiddleware,isAdmin], deleteCollaborator);

export default router;