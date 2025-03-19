import { Request, Response } from "express"
import { getPlayerService } from "../services/players-services"

export const getPlayer = async (req: Request, res: Response) => {

  const response = await getPlayerService()

  res.status(response.statusCode).json(response.body)
}