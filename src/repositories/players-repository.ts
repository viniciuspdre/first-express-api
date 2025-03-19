import path from "path"
import fs from "fs"
import { PlayerModel } from "../models/player-model"

const pathData = path.join(__dirname, "../data/players-data.json")

const language = "utf-8"
const database: PlayerModel[] = JSON.parse(fs.readFileSync(pathData, language))

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return database
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
  return database.find(player => player.id === id)
}