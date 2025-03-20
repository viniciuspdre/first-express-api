import { Request, Response } from "express"
import { getPlayerByIdService, getPlayerService, insertPlayerService } from "../services/players-services"

export const getPlayer = async (req: Request, res: Response) => {

  const response = await getPlayerService()

  res.status(response.statusCode).json(response.body)
}

export const getPlayerById = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id)
  
  const response = await getPlayerByIdService(id)

  res.status(response.statusCode).json(response.body)
}

export const postPlayer = async (req: Request, res: Response) => {
  const bodyValue = req.body

  const response = await insertPlayerService(bodyValue)
  res.status(response.statusCode).json(response.body)
}