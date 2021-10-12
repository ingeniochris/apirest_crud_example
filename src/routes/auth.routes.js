"use strict";

import { Router } from "express";

//controller
import { SignupUser, Authentic } from "../controllers/authCtrl";

//validation inputs middleware
import { validationCreateUser, validationLogin } from "../middleware/ValidationInputs";

const router = Router();

// route  "api/auth"
router.post("/signup", validationCreateUser, SignupUser);

// route api/auth/
router.post("/signing", validationLogin, Authentic);

export default router;