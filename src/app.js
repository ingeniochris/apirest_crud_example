"use strict";

import dotenv from "dotenv";
dotenv.config();
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

import { conn } from "./config/database";

//Routes
import {
  startRoutes,
  authRoutes,
  collaboratorRoutes
} from "./routes/index.routes.js";

const app = express();
conn();

//config port
app.set("port", process.env.PORT);

//middleware
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
 app.use("/api", startRoutes);
 app.use("/api/auth", authRoutes);
 app.use("/api/colaborador", collaboratorRoutes);

// error middleware
app.use((error, req, res, next) => {
  console.log(error + "--------------------------");
  const statusCode = error.statusCode || 500;
  const message = error.message;
  let errorsPresent;
  if (error.errors) {
    errorsPresent = error.errors;
  }

  res.status(statusCode).json({ msg: message, errors: errorsPresent });
});

export default app;