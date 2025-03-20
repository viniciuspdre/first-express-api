import { HttpResponse } from "../models/http-response-model"
import { getAllClubs } from "../repositories/clubs-repositories"
import { notFound, ok } from "../utils/http-helper"

export const getClubService = async (): Promise<HttpResponse> => {
  const data = await getAllClubs()

  if(Object.keys(data).length == 0) {
    return await notFound()
  }

  return ok(data)
}