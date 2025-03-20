import { Router } from "express";
import { deletePlayer, getPlayer, getPlayerById, postPlayer, updatePlayer } from "../controllers/players-controller";


const router = Router()

// "queries"

router.get("/players", getPlayer)
router.get("/players/:id", getPlayerById)

// "inserts"

router.post("/players", postPlayer)

// "deletes"

router.delete("/players/:id", deletePlayer)

// "update"

router.patch("/player/:id", updatePlayer)

export default router