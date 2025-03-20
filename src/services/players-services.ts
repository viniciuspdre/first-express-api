import { HttpResponse } from "../models/http-response-model"
import { PlayerModel } from "../models/player-model"
import { findAllPlayers, findPlayerById, insertPlayer } from "../repositories/players-repository"
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
  const data = await findPlayerById(id)

  if(data === undefined) {
    return await HttpRes.noContent()
  }

  return await HttpRes.ok(data)
}

export const insertPlayerService = async (player: PlayerModel): Promise<HttpResponse> => {
  
  if(Object.keys(player).length !== 0) {
    insertPlayer(player)
    return await HttpRes.ok(player)
  } else {
    return await HttpRes.badRequest()
  }
}