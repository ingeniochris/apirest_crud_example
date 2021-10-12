"use strict";

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const collaboratorSchema = new Schema(
  {
    nombre_colaborador: {
      type: String,
      required: true,
    },
    fecha_nacimiento: {
      type: String,
      required: true,
    },
    rfc: {
      type: String,
      required: true,
    },
    fecha_inicio: {
      type: String,
      required: true,
    },
    estado_colaborador: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Collaborator", collaboratorSchema);
