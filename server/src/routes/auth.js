import { Router } from "express";
import { AuthLogin, AuthLogout } from "../controllers/auth.js";
import { isLoggedIn } from "../middleware/auth.js";

const router = Router();

router.post("/login", AuthLogin);
router.post("/logout", AuthLogout);

export default router;
