import path from "path"
import fs from "fs"
import { PlayerModel } from "../models/player-model"

const pathData = path.join(__dirname, "../data/players-data.json")

const language = "utf-8"
const readingFile = fs.readFileSync(pathData, language)
const database: PlayerModel[] = JSON.parse(readingFile)

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return database
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
  return database.find(player => player.id === id)
}

export const insertPlayer = async (player: PlayerModel) => {
  database.push(player)
  fs.writeFileSync(pathData, JSON.stringify(database, null, 2), language)
}