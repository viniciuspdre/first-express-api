import { Router } from "express";
import { getPlayer, getPlayerById } from "../controllers/players-controller";


const router = Router()

// "queries"

router.get("/players", getPlayer)
router.get("/players/:id", getPlayerById)

// "inserts"

router.post("/players")

export default router