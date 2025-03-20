import path from "path"
import fs, { write } from "fs"
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

export const deletePlayerById = async (id: number) => {
  const index = database.findIndex(player => player.id === id)
  database.splice(index, 1)

  fs.writeFileSync(pathData, JSON.stringify(database, null, 2), language)
}

export const updatePlayerById = async (id: number, values: StatisticsModel) => {
  const playerIndex = database.findIndex(p => p.id === id)

  if(playerIndex !== -1) {
    database[playerIndex].statistics = values
    fs.writeFileSync(pathData, JSON.stringify(database, null, 2), language)
    return database[playerIndex]
  }
  
  return null
}