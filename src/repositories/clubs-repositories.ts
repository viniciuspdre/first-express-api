import path from "path"
import fs from "fs"


const pathData = path.join(__dirname, "../data/clubs-data.json")

const language = "utf-8"
const readingFile = fs.readFileSync(pathData, language)
const database = JSON.parse(readingFile)

export const getAllClubs = () => {
  return database
}