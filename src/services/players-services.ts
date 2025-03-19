import { HttpResponse } from "../models/http-response-model"
import { findAllPlayers, findPlayerById } from "../repositories/players-repository"
import * as HttpRes from "../utils/http-helper"


export const getPlayerService = async (): Promise<HttpResponse> => {

  const data = await findAllPlayers()
  let response = null
  
  if(data) {
    response = await HttpRes.ok(data)
  } else {
    response = HttpRes.noContent()
  }

  return response
}

export const getPlayerByIdService = async (id: number): Promise<HttpResponse> => {
  const data = await findPlayerById(id)

  if(data === undefined) {
    return HttpRes.noContent()
  }

  return await HttpRes.ok(data)
}