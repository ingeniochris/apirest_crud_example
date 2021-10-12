"use strict";

import { validationResult } from "express-validator";
import {
  searchAllCollaboratorsAllServices,
  searchCollaboratorIdService,
  createCollaboratorService,
  deleteCollaboratorService,
  updateCollaboratorService,
} from "../services/Collaborators";

export const searchCollaboratorAll = async (req,res, next) => {
  try {
    const collaboratorAll = await searchAllCollaboratorsAllServices();
    res.json(collaboratorAll)
  } catch (error) {
    console.error(error), next();
  }
}
export const searchCollaboratorId = async (req, res, next) => {
  try {
    const collaboratorId = await searchCollaboratorIdService(req.params.id);
    if (!collaboratorId) return res.json({ msg: "Collaborator don´t match in System" });
    res.json(collaboratorId);
  } catch (error) {
    console.error(error), next();
  }
};

export const addCollaborator = async (req, res, next) => {
  const token = req.header("x-auth-token");
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }
  try {
    const collaborator = await createCollaboratorService({ ...req.body, token });
    return res.status(201).json(collaborator);
  } catch (error) {
    v
  }
};

export const updateCollaborator = async (req, res, next) => {
  const token = req.header("x-auth-token");
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  try {
    const collaborator = await updateCollaboratorService(req.params.id, {
      ...req.body,
      token,
    });
    return res.status(201).json(collaborator);
  } catch (error) {
    console.error(error), next();
  }
};

export const deleteCollaborator = async (req, res, next) => {
  try {
    const deleteCollaborator = await deleteCollaboratorService(req.params.id);
    return res.status(201).json(deleteCollaborator);
  } catch (error) {
    console.error(error);
    next();
  }
};