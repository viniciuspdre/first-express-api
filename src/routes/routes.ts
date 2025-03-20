import { Router } from "express";
import { deletePlayer, getPlayer, getPlayerById, postPlayer, updatePlayer } from "../controllers/players-controller";
import { getClubs } from "../controllers/clubs-controller";


const router = Router()

// "queries"

router.get("/players", getPlayer)
router.get("/players/:id", getPlayerById)
router.get("/clubs", getClubs)

// "inserts"

router.post("/players", postPlayer)

// "deletes"

router.delete("/players/:id", deletePlayer)

// "update"

router.patch("/players/:id", updatePlayer)

export default router