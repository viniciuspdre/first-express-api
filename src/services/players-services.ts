import { HttpResponse } from "../models/http-response-model"
import { PlayerModel } from "../models/player-model"
import { deletePlayerById, findAllPlayers, findPlayerById, insertPlayer, updatePlayerById } from "../repositories/players-repository"
import * as HttpRes from "../utils/http-helper"


export const getPlayerService = async (): Promise<HttpResponse> => {

  const data = await findAllPlayers()
  let response = null
  
  if(data) {
    response = await HttpRes.ok(data)
  } else {
    response = await HttpRes.noContent()
  }

  return response
}

export const getPlayerByIdService = async (id: number): Promise<HttpResponse> => {

  if(!Number.isInteger(id) || id <= 0) {
    HttpRes.badRequest("Id inválido")
  }


  const data = await findPlayerById(id)

  if(data === undefined) {
    return await HttpRes.noContent()
  }

  return await HttpRes.ok(data)
}

export const insertPlayerService = async (player: PlayerModel): Promise<HttpResponse> => {
  
  if(Object.keys(player).length !== 0) {
    insertPlayer(player)
    return await HttpRes.created("You inserted your player successfully!")
  } else {
    return await HttpRes.badRequest()
  }
}

export const deletePlayerByIdService = async (id: number): Promise<HttpResponse> => {

  if(!Number.isInteger(id) || id <= 0) {
    HttpRes.badRequest("Id inválido")
  }

  const data = await findPlayerById(id)

  if(data === undefined) {
    return await HttpRes.notFound()
  }

  deletePlayerById(id)
  return await HttpRes.ok("Deletado com sucesso")
}

export const updatePlayerByIdService = async (id: number, statistics: StatisticsModel): Promise<HttpResponse> => {

  if(!Number.isInteger(id) || id <= 0) {
    HttpRes.badRequest("Id inválido")
  }

  const returnValue = await updatePlayerById(id, statistics)

  if(returnValue !== null) {
    return await HttpRes.ok({message: "Atualizado com sucesso"})
  }

  return HttpRes.notFound()
  
}