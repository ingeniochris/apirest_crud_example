"use strict";

//Models DB´s
import Collaborator from "../models/Collaborator";

/**
 * This search all collaborators
 * @returns all collaborators
 */
export const searchAllCollaboratorsAllServices = async _ => {
  try {
    const collaborators = await Collaborator.find();
    return collaborators;
  } catch (error) {
    console.log(error);
    return { msg: "Collaborator don´t exists" };
  }
}

/**
 * This search one collaborator in db
 * @param {id} id Id collaborator.
 * @returns One collaborator
 */
export const searchCollaboratorIdService = async (id) => {
  try {
    const collaborator = await Collaborator.find({_id:{$in: id}});
    return collaborator;
  } catch (error) {
    console.log(error)
    return { msg: "Collaborator don´t exists" };
  }
  
};

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
export const createCollaboratorService = async ({ nombre_colaborador, fecha_nacimiento, rfc,fecha_inicio, estado_colaborador, area }) => {
  try {
    const searchCollaborator = await Collaborator.findOne({ nombre_colaborador });
    if (searchCollaborator) return { msg: "The collaborator already exists" };
    const newCollaborator = new Collaborator({
      nombre_colaborador,
      fecha_nacimiento, 
      rfc, 
      fecha_inicio,
      estado_colaborador,
      area
    });
    const saveCollaborator = await newCollaborator.save();
    return saveCollaborator;
  } catch (error) {
    console.error(error);
    return { msg: "Collaborator don´t created" };
  }
};

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
export const updateCollaboratorService = async (
  id,
  { nombre_colaborador, fecha_nacimiento, rfc,fecha_inicio, estado_colaborador, area }
) => {
  try {
    const searchCollaboratorId = await Collaborator.findByIdAndUpdate(id, {
      $set: {
        nombre_colaborador, fecha_nacimiento, rfc,fecha_inicio, estado_colaborador, area
      },
    });
    if(!searchCollaboratorId) return {msg:'the Collaborator has not been found'}
    return { msg: "the Collaborator has been updated successfully" };

  } catch (error) {
    console.error(error);
    return { msg: "Collaborator don´t updating" };
  }
};

/**
 * Delete Collaborator
 * @param {ObjectId} id
 * @returns {Json} msg message
 */
export const deleteCollaboratorService = async (id) => {
  try {
    const collaborator = await Collaborator.deleteOne({ _id: id });
    if(collaborator.deletedCount < 1) return {msg:'the movie has not been found'}
    return { msg: "Collaborator deleted successfully" };
  } catch (error) {
    console.error(error);
    return { msg: "Collaborator don´t deleting" };
  }
};