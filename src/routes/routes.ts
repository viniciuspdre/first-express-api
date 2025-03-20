import { Router } from "express";
import { getPlayer, getPlayerById, postPlayer } from "../controllers/players-controller";


const router = Router()

// "queries"

router.get("/players", getPlayer)
router.get("/players/:id", getPlayerById)

// "inserts"

router.post("/players", postPlayer)

export default router